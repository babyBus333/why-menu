module.exports = {
  '**/*.{js,jsx,ts,tsx}': ['eslint --cache --fix'],
  '**/*.json,.{eslintrc,prettierrc}': [
    'prettier --ignore-path .eslintignore --parser json --write',
  ],
  '**/*.{css,scss,less}': [
    'prettier --ignore-path .eslintignore --single-quote --write',
    'stylelint --fix',
  ],
  '**/*.{html,md,yml}': ['prettier --ignore-path .eslintignore --single-quote --write'],
}
