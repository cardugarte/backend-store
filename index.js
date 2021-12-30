const express = require('express');
const faker = require('faker');
const app = express();
const port = 3000;

app.get('/', (req, resp) => {
  resp.send('Hola mundo con Node y Express');
});

app.get('/productos', (req, resp) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });

  };
  resp.json(products);
});


app.get('/productos/filter', (req, resp) => {
  resp.send('Yo soy un filter');
});

app.get('/productos/:id', (req, resp) => {
  const { id } = req.params
  resp.json({
    id,
    name: 'Sacapuntas',
    price: 1000
  })
});


app.get('/users', (req, resp) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    resp.json({
      limit,
      offset,
    });
  } else {
    resp.send('No existe ningún parámetro');
  }
});

app.get('/categorias/:categoryId/productos/:productsId', (req, resp) => {
  const { categoryId, productsId } = req.params;
  resp.json({
    categoryId,
    productsId,
  })
})

app.listen( port, () => {
  console.log('Port active')
} );
