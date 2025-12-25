export function errorMiddleware(err, req, res, next) {
  console.error(err);

  // Zod validation error
  if (err.name === "ZodError") {
    return res.status(400).json({
      message: "Validation failed",
      errors: err.errors,
    });
  }

  // Auth errors
  if (err.message === "Invalid credentials") {
    return res.status(401).json({ message: err.message });
  }

  // Default fallback
  res.status(500).json({
    message: "Internal server error",
  });
}
