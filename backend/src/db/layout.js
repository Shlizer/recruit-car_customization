module.exports = {
  components: [
    {
      type: 'FlexBox',
      attributes: { className: 'mainFlex' },
      direction: 'columns',
      components: [
        {
          type: 'FlexBox',
          attributes: { className: 'noPadding', style: { maxWidth: '55vw' } },
          direction: 'rows',
          components: [{ type: 'PartList' }],
        },
        {
          type: 'Summary',
          attributes: { style: { width: '25vw' } },
        },
      ],
    },
  ],
}
