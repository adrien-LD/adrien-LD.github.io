module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended",
		"plugin:prettier/recommended",
		"plugin:@unocss/recommended"
	],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parser: "@typescript-eslint/parser",
	plugins: ["react-refresh", "import"],
	rules: {
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
		"import/no-unused-modules": "error",
		"import/named": "off",
		"import/namespace": "error",
		"import/default": "error",
		"import/export": "error",
		"import/no-named-as-default": "warn",
		"import/no-named-as-default-member": "warn",
		"import/no-duplicates": "warn",
		"import/order": [
			"error",
			{
				pathGroups: [
					{
						pattern: "react",
						group: "builtin",
						position: "before",
					},
					{
						pattern: "react-dom",
						group: "builtin",
						position: "before",
					},
					{
						pattern: "src/**",
						group: "internal",
					},
				],
				pathGroupsExcludedImportTypes: ["react", "react-dom"],
				alphabetize: {
					order: "asc",
					caseInsensitive: true,
				},
				"newlines-between": "always-and-inside-groups",
				groups: [
					"builtin",
					"external",
					"internal",
					"parent",
					"sibling",
					"index",
					"object",
					"type",
				],
			},
		],
    '@unocss/order': 'warn',
	},
};
