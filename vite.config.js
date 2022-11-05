import { sveltekit } from '@sveltejs/kit/vite';
import legacy from '@vitejs/plugin-legacy'

const config = {
	plugins: [
		sveltekit(),
		legacy({ 'node_modules/leader-line/leader-line.min.js': 'LeaderLine' }),
	]
};

export default config;
