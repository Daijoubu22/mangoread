const CracoLessPlugin = require('craco-less');

const bgPrimaryColor = '#090909';
const bgSecondaryColor = '#171717';
const textPrimaryColor = '#FFFFFF';
const textSecondaryColor = '#9D9D9D';
const mangoYellowColor = '#FFE600';

module.exports = {
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: {
							'@primary-color': mangoYellowColor,
							'@primary-color-hover': textPrimaryColor,
							'@primary-color-active': textPrimaryColor,
							'@primary-color-outline': textPrimaryColor,
							'@primary-1': 'green',
							'@primary-2': 'blue',
							'@primary-5': 'aqua', // to control the text color in many active and hover states
							'@primary-6': 'blueviolet', // to control the text color of active buttons
							'@primary-7': 'red',
							'@primary-8': 'brown',
							'@primary-9': 'lime',
							'@primary-10': 'orange',
							'@icon-color': textSecondaryColor,
							'@border-style-base': 'none',
							'@border-width-base': '0px',
							'@border-radius-base': '1000px',
							'@border-radius-sm': '1000px',
							'@body-background': bgPrimaryColor,
							'@component-background': bgSecondaryColor,
							'@text-color': textPrimaryColor,
							'@text-color-secondary': textSecondaryColor,
							'@heading-color': textPrimaryColor,
							'@heading-1-size': '48px',
							'@heading-2-size': '32px',

							'@btn-default-color': textSecondaryColor,
						},
						javascriptEnabled: true,
					},
				},
			},
		},
	],
};