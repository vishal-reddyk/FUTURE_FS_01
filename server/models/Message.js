import { getPool } from '../config/db.js';

export const saveMessage = async ({ name, email, message }) => {
  const pool = getPool();
  const [result] = await pool.execute(
    'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)',
    [name, email, message]
  );
  return {
    id: result.insertId,
    name,
    email,
    message,
    createdAt: new Date()
  };
};

