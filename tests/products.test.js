const request = require('supertest');
const app = require('../src/app');

describe('API /products', () => {
  it('debe retornar un array vacío al inicio', async () => {
    const res = await request(app).get('/products');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });

  it('debe agregar un nuevo producto', async () => {
    const res = await request(app).post('/products').send({
      name: 'Producto de prueba',
      price: 100
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Producto de prueba');
  });
});
