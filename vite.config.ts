import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import netlifyPlugin from "@netlify/vite-plugin-react-router";
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'
import { remarkAlert } from 'remark-github-blockquote-alert'

export default defineConfig({
  plugins: [mdx({ remarkPlugins: [remarkGfm, remarkAlert] }), reactRouter(), tsconfigPaths(), tailwindcss(), netlifyPlugin()],
});
