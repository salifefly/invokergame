import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue2";

export default defineConfig({
  base: "",
  plugins: [
    vue({
      // 把 <audio> 内的 <source src> 也转成模块 import，
      // 与 Vue CLI 下 vue-loader 的 transformAssetUrls 行为保持一致
      transformAssetUrls: {
        audio: ["src"],
        source: ["src"],
        img: ["src"],
        image: ["xlink:href", "href"],
        use: ["xlink:href", "href"]
      }
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
});
