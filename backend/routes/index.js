// import { Router } from 'express'

import express from 'express'
import { getData, insertData } from '../model/index.js'

const router = express.Router()

// http://localhost:4000/api/productos

router.get('/productos', async (req, res) => {
  const response = await getData()
  res.json({ data: response })
})

router.post('/productos', async (req, res) => {

  const { nombre, precio, stock } = req.body
  if (nombre === undefined || precio === undefined || stock === undefined) return res.status(400).json({ message: 'Datos incorrectos' })
  const response = await insertData({ nombre, stock, precio })
  res.json({ data: response })

})

export default router