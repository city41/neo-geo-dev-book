const mobileMargin = {
	marginLeft: 'auto',
	marginRight: 'auto',
	maxWidth: '95vw',
};

module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			typography: (theme) => ({
				DEFAULT: {
					css: {
						div: mobileMargin,
						p: mobileMargin,
						h1: mobileMargin,
						h2: mobileMargin,
						h4: mobileMargin,
						h5: mobileMargin,
						h6: mobileMargin,
						h7: mobileMargin,
						code: {
							backgroundColor: '#ececec',
						},
						'code::before': {
							content: '',
						},
						'code::after': {
							content: '',
						},
						pre: {
							maxWidth: '100vw',
							fontSize: '0.9em !important',
						},
						'pre, pre code, pre code span': {
							tabSize: '2 !important',
						},
					},
				},
			}),
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
