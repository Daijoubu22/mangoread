const CracoLessPlugin = require('craco-less');

const bgPrimaryColor = '#090909';
const bgSecondaryColor = '#171717';
const textPrimaryColor = '#FFFFFF';
const textSecondaryColor = '#9D9D9D';
const mangoYellowColor = '#FFE600';
const mangoGreenColor = '#77D400';
const mangoOrangeColor = '#FF6B00';
const mangoGradient = `linear-gradient(45deg, ${mangoGreenColor} 0%, ${mangoYellowColor} 50%, ${mangoOrangeColor} 100%)`;

module.exports = {
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: {
							'@primary-color': mangoYellowColor,
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

							// BUTTON
							'@btn-default-bg': bgSecondaryColor,

							// INPUT
							'@input-bg': bgSecondaryColor,

							// PAGINATION
							'@pagination-item-bg': bgSecondaryColor,
							'@pagination-item-input-bg': bgSecondaryColor,
							'@pagination-item-bg-active': bgSecondaryColor,
							'@pagination-item-link-bg': bgSecondaryColor,
						},
						javascriptEnabled: true,
					},
				},
			},
		},
	],
};