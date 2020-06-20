module.exports = {
  presets: [
		'@babel/preset-react',
    [
			'@ava/stage-4',
      {
        targets: {
          node: 'current'
        }
      },
    ]
  ]
};