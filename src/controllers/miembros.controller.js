import { pool } from "../utils/database.js";

export const getMiembros = async (req, res) => {
    const { id, nombre } = req.body;
    const pkmember = parseInt(id);
    const [ rows ] = await pool.query('call sp_getmiembroByIdOrName(?,?)',[pkmember, nombre]);
    res.status(200).json(
        {
            msg: 'Get sucess', 
            data: rows[0]
        });
}

export const createMiembros = async (req, res) => {
    const { nombre, direccion, codigo } = req.body;
    const [ rows ] = await pool.query(`INSERT INTO miembros (nombre, direccion, codigo ) VALUES (?, ?, ?)`,[nombre, direccion, codigo])
    res.status(201).json(
        {
            msg: 'Post sucess', 
            id: rows.insertId, 
            nombre, 
            direccion, 
            codigo
        });
}
