import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/ip-check": {
        target: "https://ipqualityscore.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/ip-check/, "/api/json/ip"),
      },
    },
  },
});
