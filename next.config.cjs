const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
	productionBrowserSourceMaps: false,
	optimizeFonts: true,
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.resolve.fallback = {
				fs: false,
				module: false,
			};
		}

		return config;
	},
	images: {
		domains: ['example.com'],
	},
};

module.exports = withPlugins(
	[
		[
			optimizedImages,
			{
				handleImages: ['jpeg', 'png', 'webp'],
				optimizeImages: true,
			},
		],
	],
	nextConfig,
);
