import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import image from '@rollup/plugin-image';
import autoprefixer from 'autoprefixer';
import postcss from "rollup-plugin-postcss";

// const packageJson = require("./package.json");
import packageJson from "./package.json" assert { type: "json" };

export default [
  {
    input: "src/index.ts",
    // external: ['react-dom','react', /\.css$/],
    external: ['react-dom','react'],
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      postcss({}),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      image()
    ],
  },
  // {
  //   input: "dist/esm/index.d.ts",
  //   output: [{ file: "dist/index.d.ts", format: "esm" }],
  //   plugins: [dts()],
  // },
];