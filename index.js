const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, resp) => {
  resp.send('Hola mundo con Node y Express');
});

app.get('/productos', (req, resp) => {
  resp.json([
    {
    name: 'Sacapuntas',
    price: 1000
  },
    {
    name: 'Lápiz',
    price: 1500
  },
]);
});

app.get('/productos/:id', (req, resp) => {
  const { id } = req.params
  resp.json({
    id,
    name: 'Sacapuntas',
    price: 1000
  })
});

app.get('/categorias/:categoryId/productos/:productsId', (req, resp) => {
  const { categoryId, productsId } = req.params;
  resp.json({
    categoryId,
    productsId
  })
})

app.listen( port, () => {
  console.log('Port active')
} );
