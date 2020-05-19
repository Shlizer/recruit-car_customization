const chooseComponents = [
  { type: 'Car' },
  { type: 'Engine' },
  { type: 'Gearbox' },
  { id: 'ColorInterior', type: 'Color', place: 'interior' },
  { id: 'ColorExterior', type: 'Color', place: 'exterior' },
]

module.exports = {
  components: [
    {
      type: 'FlexBox',
      attributes: { className: 'mainContainer' },
      direction: 'columns',
      components: [
        {
          type: 'FlexBox',
          direction: 'rows',
          components: chooseComponents,
        },
        {
          type: 'Summary',
        },
      ],
    },
  ],
}
