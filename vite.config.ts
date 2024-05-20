import path from "node:path";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import react from "@vitejs/plugin-react-swc";
import million from "million/compiler";
import { defineConfig } from "vite";
import viteTsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/",
	plugins: [
		million.vite({ auto: true }),
		react(),
		viteTsconfigPaths(),
		TanStackRouterVite(),
	],
	server: {
		port: 3000,
	},
});
