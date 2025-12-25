import * as authService from "./auth.service.js";
import { registerSchema, loginSchema } from "./auth.validation.js";

export async function register(req, res, next) {
  try {
    const data = registerSchema.parse(req.body);
    const user = await authService.registerUser(data);
    const token = authService.generateToken(user);

    res.cookie("access_token", token, { // Set cookie with JWT
      httpOnly: true, // inaccessible to frontend JS
      sameSite: "lax", // sameSite attribute for CSRF protection
      secure: false, // true in production
    });

    res.status(201).json(user);
  } catch (err) {
    next(err); // Pass error to the error handling middleware
  }
}

export async function login(req, res, next) {
  try {
    const data = loginSchema.parse(req.body);
    const user = await authService.loginUser(data);
    const token = authService.generateToken(user);

    res.cookie("access_token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
    });

    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } catch (err) {
    next(err);
  }
}

export function logout(req, res) {
  res.clearCookie("access_token");
  res.json({ message: "Logged out successfully" });
}

export function me(req, res) {
  res.json(req.user);
}
