module.exports = {

	build: {
		extend(config, context) {

			if (context.isClient) {

				config.externals = {
					'uikit': 'UIkit'
				}

			}

		},

		cache: true,
		parallel: true,

		// extractCSS: true,
		// analyze: true

	},

	plugins: [
		'~/plugins/boot'
	],

	modules: [
		['@nuxtjs/google-analytics', { id: 'UA-42150424-1' }]
	],

	head: {
		meta: [

		],
		link: [
			{ rel: 'shortcut icon', type: 'image/png', href: '/images/favicon.png' },
			{ rel: 'apple-touch-icon-precomposed', type: 'image/png', href: '/images/apple-touch-icon.png' }
		],
		script: [
			{ src: '/uikit.min.js', type: 'text/javascript', charset: 'utf-8' },
			{ src: '/uikit-icons.min.js', type: 'text/javascript', charset: 'utf-8' }
		]
	},

	css: [
		'~/less/theme.less'
	]

}