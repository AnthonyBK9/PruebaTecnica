import { pool } from "../utils/database.js";

export const getMiembroByIdorName = async (req, res) => {
    const { id, nombre } = req.body;

    if ( id, nombre) {

        const pkmember = parseInt(id);
        const [ rows ] = await pool.query('call sp_getmiembroByIdOrName(?,?)',[pkmember, nombre]);
        res.status(200).json(
            {
                msg: 'Get success', 
                data: rows[0]
            });

    } else {

        res.status(400).json(
            {
                mgs: 'Los campos son obligatorios',
                fields: {
                    id: 'string',
                    nombre: 'string',
                }
            }
        );
    }
}

export const createMiembros = async (req, res) => {
    const { nombre, direccion, codigo } = req.body;
    if( NavigationPreloadManager, direccion, codigo ) {
        const [ rows ] = await pool.query(`INSERT INTO miembros (nombre, direccion, codigo ) VALUES (?, ?, ?)`,[nombre, direccion, codigo])
        res.status(201).json(
            {
                msg: 'Post success', 
                id: rows.insertId, 
                nombre, 
                direccion, 
                codigo
            });
    } else {
        res.status(400).json(
            {
                msg: 'Todos los campos son obligatorios',
                fields: {
                    nombre: 'String',
                    direccion: 'String',
                    codigo: 'String'
                }
            }
        );
    }
}
