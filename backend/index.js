import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import router from './routes/index.js'
dotenv.config()

const { pathname: root } = new URL("../", import.meta.url)

console.log("ROOT", root);

const app = express()


const port = process.env.PORT || 3000;

app.use(express.json())
app.use(cors())
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de STOCK')
})

app.use('/api', router)

app.get('/home', (req, res) => {
  res.sendFile(root + '/backend/index.html')
})
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
})