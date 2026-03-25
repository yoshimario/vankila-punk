import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // <--- IS THIS HERE?

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <--- AND IS THIS HERE?
  ],
});
