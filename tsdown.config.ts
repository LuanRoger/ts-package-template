import { defineConfig } from "tsdown";

export default defineConfig({
  dts: true,
  entry: {
    index: "src/index.ts",
  },
  format: "esm",
  sourcemap: false,
  tsconfig: "tsconfig.build.json",
});
