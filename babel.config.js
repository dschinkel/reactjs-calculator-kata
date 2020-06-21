module.exports = {
  presets: [
  	'@babel/preset-env',
		'@babel/preset-react',
    [
			'@ava/stage-4',
      {
        targets: {
          node: 'current'
        }
      },
    ]
  ],
	plugins: [
		'@babel/plugin-proposal-class-properties',
		'@babel/plugin-transform-runtime'
	]
};