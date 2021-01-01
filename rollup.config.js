// import { DEFAULT_EXTENSIONS } from "@babel/core";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import pkg from "./package.json";
import del from 'rollup-plugin-delete';
import filesize from 'rollup-plugin-filesize';
// import babel from "@rollup/plugin-babel"
import { terser } from "rollup-plugin-terser";
import path from "path";
const filesizeConfig = {
  showGzippedSize: true,
  showBrotliSize: true,
  showMinifiedSize: true,
};
const config =  {
    external: ["path"],
    input: path.resolve('src','index.ts'),
    output: [
      
      {
        file: pkg.main,
        format: 'es',
        name: 'rollupexample'
        // exports: 'named',
      },
    ],
    plugins:[ del (["dist"]),nodeResolve(), typescript(), terser()]
    // plugins: [ nodeResolve(), babel({extensions: [...DEFAULT_EXTENSIONS, "ts"]})]
  };

  export default config;