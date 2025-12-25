import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./modules/auth/auth.routes.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";

const app = express();  // Initialize Express application.

/* ---------- Global Middlewares ---------- */

// Parse JSON bodies
app.use(express.json());

// Parse cookies (required for JWT cookies)
app.use(cookieParser());

/* ---------- Routes ---------- */

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

// Auth routes
app.use("/auth", authRoutes); // Mount auth routes at /auth


/* ---------- Error Handling Middleware (last) ---------- */
app.use(errorMiddleware); // Handle errors globally


export default app; // Export the app to use in other parts of the application.