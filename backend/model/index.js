
import pool from "../config/index.js";

export const getData = async () => {

  try {
    const res = await pool.query('SELECT * FROM productos')
    console.log("[RESPUESTA DB]: ", res);
    return res.rows
  } catch (error) {
    return error.message
  }

}


export const insertData = async ({ nombre, stock, precio }) => {
  try {
    const query = `INSERT INTO productos(nombre, stock, precio) VALUES($1, $2, $3)`
    const values = [nombre, stock, precio]
    const res = await pool.query(query, values)
    // console.log("[RESPUESTA DB]: ", res);
    if (res.rowCount > 0) return 'Producto agregado correctamente'
  } catch (error) {
    console.log("[EROR]: ", error.message);
    return error.message
  }
}
