// This file tells Prettier how to format your code.
// You can change these if you want it to look different.

module.exports = {
  printWidth: 100, // Max characters in one line before it wraps.

  tabWidth: 2, // How many spaces to use when you press "Tab". 2 is standard.
  useTabs: false, // false = use spaces instead of real tab characters

  semi: true, // Add semicolons at the end of lines. true = yes please.

  singleQuote: true, // Use single quotes 'like this' instead of "double quotes"
  jsxSingleQuote: true, // Same as above, but inside HTML/JSX tags like <div className='thing'>

  quoteProps: 'as-needed', // Only add quotes around object keys when needed.

  trailingComma: 'all', // Add commas at the end of lists/objects — even the last item.
  // Helps with clean git diffs.

  bracketSpacing: true, // Add spaces inside object brackets:

  jsxBracketSameLine: false, // Put the > of a JSX tag on a new line (looks cleaner):
  // Good:
  // <Component
  //   prop='value'
  // />

  arrowParens: 'always', // Always use parentheses with arrow functions

  singleAttributePerLine: false, // Don't break every prop in JSX into a new line

  endOfLine: 'lf', // Use Unix-style line breaks (safer across platforms)
};
