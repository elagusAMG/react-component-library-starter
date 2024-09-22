import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { viteStaticCopy } from "vite-plugin-static-copy";

import { peerDependencies } from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		dts({
			tsconfigPath: "./tsconfig.app.json",
			exclude: ["**/*.stories.tsx", "**/*.test.tsx"],
		}),
		viteStaticCopy({
			targets: [
				{
					src: "./tailwind-preset/index.js", // Path to your preset file
					dest: "./tailwind-base", // Destination folder inside dist/
					rename: "index.js",
				},
			],
		}),
	],
	build: {
		lib: {
			entry: "./lib/index.ts",
			name: "test-ui",
			fileName: (format) => `test-ui.${format}.js`,
			formats: ["es", "cjs", "umd"],
		},
		rollupOptions: {
			external: Object.keys(peerDependencies),
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
				},
			},
		},
	},
});
