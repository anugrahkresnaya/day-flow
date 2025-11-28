module.exports = {
  // Type check TS files
  '**/*.{ts,tsx}': () => 'tsc --noEmit',

  // Lint & format TS, TSX, JS, JSX files
  '**/*.{ts,tsx,js,jsx}': filenames => [
    `eslint --fix ${filenames.join(' ')}`,
    `prettier --write ${filenames.join(' ')}`
  ],

  // Format JSON, Markdown, CSS/SCSS files
  '**/*.{json,md,css,scss}': filenames => `prettier --write ${filenames.join(' ')}`
}
