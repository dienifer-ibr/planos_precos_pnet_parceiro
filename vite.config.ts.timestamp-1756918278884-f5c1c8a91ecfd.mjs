// vite.config.ts
import { defineConfig } from "file:///C:/Users/user/Desktop/WORK/DEV%20WEB/LP%20PRE%C3%87OS%20PNET/LP%20PRE%C3%87OS%20PNET/watch-recolor-clone/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/user/Desktop/WORK/DEV%20WEB/LP%20PRE%C3%87OS%20PNET/LP%20PRE%C3%87OS%20PNET/watch-recolor-clone/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import { componentTagger } from "file:///C:/Users/user/Desktop/WORK/DEV%20WEB/LP%20PRE%C3%87OS%20PNET/LP%20PRE%C3%87OS%20PNET/watch-recolor-clone/node_modules/lovable-tagger/dist/index.js";
var __vite_injected_original_dirname = "C:\\Users\\user\\Desktop\\WORK\\DEV WEB\\LP PRE\xC7OS PNET\\LP PRE\xC7OS PNET\\watch-recolor-clone";
var vite_config_default = defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080
  },
  plugins: [
    react(),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
}));
export {
  vite_config_default as default
};
