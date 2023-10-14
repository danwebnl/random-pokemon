import { resolve } from "node:path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import tsConfigPaths from "vite-tsconfig-paths"
import * as packageJson from "./package.json"
import { libInjectCss } from "vite-plugin-lib-inject-css"

export default defineConfig(() => ({
  plugins: [
    react(),
    libInjectCss(),
    tsConfigPaths(),
    dts({
      include: ["src/RandomPokemon/"],
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup.js",
  },
  build: {
    lib: {
      entry: resolve("src", "RandomPokemon/index.tsx"),
      name: "RandomPokemon",
      formats: ["es", "umd", "cjs"],
      fileName: (format) => `random-pokemon.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
}))
