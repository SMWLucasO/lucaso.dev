import path from "path";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import react from "@vitejs/plugin-react-swc";
import million from "million/compiler";
import { defineConfig } from "vite";

const __dirname = path.dirname(import.meta.url);

// https://vitejs.dev/config/
export default defineConfig({
	base: "/",
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@shared": path.resolve(__dirname, "./src/Modules/Shared"),
			"@components": path.resolve(__dirname, "./src/Modules/Shared/Components"),
		},
	},
	plugins: [million.vite({ auto: true }), react(), TanStackRouterVite()],
	server: {
		port: 3000,
	},
});
