# Checkout TDD Kata

Escriba un programa que implementa el pago de una tienda. Este programa toma un conjunto de productos como una secuencia de caracteres (ABBDBBAC) representando los productos en un carro de compras y retorna la cantidad total a pagar. Cada producto tiene un precio fijo, pero algunos tienen descuentos especiales.
|Item|Precio|Descuento|
|----|------|---------|
| A  |   50 | 3 x 130 |
| B  |   30 | 2 x 45  |
| C  |   20 |         |
| D  |   15 |         |

Resultados de ejemplo: 
  AA >> 100
  AABCDADDCD >> 260
  AAABBBCCCDDD >> 310
