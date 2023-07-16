export default {
	'env': {
		'node': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
	],
	'overrides': [
		{
			'env': {
				'node': true
			},
			'files': [
				'.eslintrc.{js,cjs}'
			],
			'parserOptions': {
				'sourceType': 'script'
			}
		}
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module',
		'project': './tsconfig.json',
	},
	'plugins': [
		'@typescript-eslint',
		'react',
		'prettier'
	],
	'rules': {
		'indent': [
			'error',
			2
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single',
		],
		'semi': [
			'error',
			'always'
		],
		'no-empty-function': 'off',
		'@typescript-eslint/no-empty-function': 'off',
		'react/display-name': 'off',
		'react/prop-types': 'off',
		'react/jsx-key': ['error', { checkFragmentShorthand: true }],
		'arrow-body-style': ['error', 'as-needed'],
		'react/jsx-boolean-value': ['error', 'always'],
		'react/jsx-curly-brace-presence': [
			'error',
			{ props: 'always', children: 'always' },
		],
		'prettier/prettier': 'error',
	}
};
