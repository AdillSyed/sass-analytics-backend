import pool from "../../db/index.js";

export async function getMe(req, res, next) {
  try {
    const result = await pool.query(
      "SELECT id, name, email, role FROM users WHERE id = $1",
      [req.user.id]
    );

    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
}

export async function getAllUsers(req, res, next) {
  try {
    const result = await pool.query(
      "SELECT id, name, email, role FROM users ORDER BY id"
    );
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
}

export async function deleteUser(req, res, next) {
  try {
    await pool.query("DELETE FROM users WHERE id = $1", [req.params.id]);
    res.json({ message: "User deleted" });
  } catch (err) {
    next(err);
  }
}
