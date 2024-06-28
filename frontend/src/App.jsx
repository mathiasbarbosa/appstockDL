
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [products, setProducts] = useState([])
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: '',
    stock: 0,
    precio: 0
  })

  useEffect(() => {
    fetch('http://localhost:4000/api/productos')
      .then(response => response.json())
      .then(data => setProducts(data.data))
      .catch(err => console.log('[ERROR]: ', err))
  }, [])


  const handleChange = (e) => {
    setNuevoProducto((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    // validar
    // fetch
    const response = await fetch('http://localhost:4000/api/productos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nuevoProducto)
    })

    if (response.ok) {
      fetch('http://localhost:4000/api/productos')
        .then(response => response.json())
        .then(data => setProducts(data.data))
        .catch(err => console.log('[ERROR]: ', err))
    }
  }

  return (
    <>
      <h1> Control de Stock</h1>
      <main>
        {
          products.length ? products.map(p => {
            return (
              <div key={p.id}>
                <h2>{p.nombre}</h2>
                <p>Stock: {p.stock}</p>
              </div>
            )
          })
            : 'No hay productos'
        }
      </main>

      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required value={nuevoProducto.nombre} onChange={handleChange} />

        <label htmlFor="stock">Stock:</label>
        <input type="number" id="stock" name="stock" required value={nuevoProducto.stock} onChange={handleChange} />

        <label htmlFor="stock">PRecio:</label>
        <input type="number" id="precio" name="precio" required value={nuevoProducto.precio} onChange={handleChange} />

        <button type="submit">Agregar Producto</button>
      </form>

    </>
  )
}

export default App
