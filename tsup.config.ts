import { Options } from "tsup";
export const tsup: Options = {
  target: "esnext",
  clean: true,
  dts: true,
  entryPoints: ["src/index.tsx"], //jfhf
  entry: ["src/**/*.ts", "src/**/*.tsx"],
  //entry: ["src/index.tsx"],
  keepNames: true,
  minify: true,
  sourcemap: true,
  format: ["cjs", "esm"],
};
