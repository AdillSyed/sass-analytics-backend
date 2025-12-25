import pool from "../../db/index.js";

export async function createOrganization(req, res, next) {
  try {
    const result = await pool.query(
      "INSERT INTO organizations (name) VALUES ($1) RETURNING *",
      [req.body.name]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
}

export async function getOrganizations(req, res, next) {
  try {
    const result = await pool.query(
      "SELECT * FROM organizations ORDER BY id"
    );
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
}
