module.exports = [
  {
    id: 'PRO RS3',
    name: 'PRO RS3',
    price: 584.88,
  },
  {
    id: 'UBER RS2',
    name: 'UBER RS2',
    price: 414.13,
    notFit: {
      engine: ['5.2L 532BHP'],
      gearbox: ['Manual 6G'],
      colorInterior: ['red'],
      colorExterior: ['red'],
    },
  },
  {
    id: 'STANDARD',
    name: 'STANDARD',
    price: 389.45,
    notFit: {
      engine: ['5.2L 532BHP', '4.2L 443BHP'],
      gearbox: ['Manual 6G'],
      colorInterior: ['red', 'oragne', 'black'],
      colorExterior: ['red', 'oragne'],
    },
  },
  {
    id: 'WK',
    name: 'WK',
    price: 260.1,
    notFit: {
      engine: ['5.2L 532BHP', '4.2L 443BHP', '3.6L 374BHP'],
      gearbox: ['Manual 6G', 'Automatic'],
      colorInterior: ['red', 'yellow', 'orange', 'black'],
      colorExterior: ['red', 'yellow', 'orange'],
    },
  },
]
