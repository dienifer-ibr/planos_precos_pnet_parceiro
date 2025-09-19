// vite.config.ts
import { defineConfig } from "file:///C:/Users/user/Desktop/WORK/DEV%20WEB/planos_precos_pnet/planos_precos_pnet/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/user/Desktop/WORK/DEV%20WEB/planos_precos_pnet/planos_precos_pnet/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import { componentTagger } from "file:///C:/Users/user/Desktop/WORK/DEV%20WEB/planos_precos_pnet/planos_precos_pnet/node_modules/lovable-tagger/dist/index.js";
var __vite_injected_original_dirname = "C:\\Users\\user\\Desktop\\WORK\\DEV WEB\\planos_precos_pnet\\planos_precos_pnet";
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
