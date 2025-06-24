import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import netlifyPlugin from "@netlify/vite-plugin-react-router";
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'

export default defineConfig({
  plugins: [mdx({ remarkPlugins: [remarkGfm] }), reactRouter(), tsconfigPaths(), tailwindcss(), netlifyPlugin()],
});
