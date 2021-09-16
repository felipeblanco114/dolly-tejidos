const express = require('express');

const app = express();
const mercadopago = require ('mercadopago'); // SDK de Mercado Pago

//  Credeciales de Mercado Pago
mercadopago.configure({
    access_token: 'PROD_ACCESS_TOKEN'
});

app.get('/checkout', (req, res) => {
    res.send('<h1>Hola desde checkout</h1>')
})

app.listen(5000, () => {
    console.log('Server on port 5000.')
})