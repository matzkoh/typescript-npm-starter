const add = 'git add'
const eslint = 'eslint --fix'
const prettier = 'prettier --write'

module.exports = {
  '*.{js,ts}': [eslint, add],
  '*.{json,md,yml}': [prettier, add],
}
