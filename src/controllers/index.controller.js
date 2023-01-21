import { pool } from '../utils/database.js';

export const connect = async (req, res) => {
    const [result] = await pool.query('SELECT 1 + 1 AS result');
    res.json(result[0]);
}