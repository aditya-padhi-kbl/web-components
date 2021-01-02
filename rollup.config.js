import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import pkg from './package.json';
import path from 'path';
import { terser } from 'rollup-plugin-terser';
import { DEFAULT_EXTENSIONS } from '@babel/core';
const extensions = [
  ...DEFAULT_EXTENSIONS, '.ts', '.tsx'
];

console.log(extensions)

export default {
  input: path.resolve("src", "index.ts"),

  // Specify here external modules which you don't want to include in your bundle (for instance: 'lodash', 'moment' etc.)
  // https://rollupjs.org/guide/en/#external
  external: ["path"],

  plugins: [
    // Allows node_modules resolution
    resolve({ extensions }),

    // Allow bundling cjs modules. Rollup doesn't understand cjs
    commonjs(),

    // Compile TypeScript/JavaScript files
    babel({
      extensions,
      babelHelpers: 'runtime',
      include: ['src/**/*']
    })
  ],

  output: [{
    file: pkg.main,
    format: 'es',
    name: 'rollupexample',
    plugins: [terser({
      format: {
        comments: false
      }
    })]
  }],
};