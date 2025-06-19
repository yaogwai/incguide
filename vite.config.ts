import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import netlifyPlugin from "@netlify/vite-plugin-react-router";
import mdx from '@mdx-js/rollup'

export default defineConfig({
  plugins: [mdx(), reactRouter(), tsconfigPaths(), tailwindcss(), netlifyPlugin()],
});
