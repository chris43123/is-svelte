import { sveltekit } from '@sveltejs/kit/vite';
import legacy from '@vitejs/plugin-legacy'

const config = {
	plugins: [
		sveltekit(),
		legacy({ 'src/utils/leader-line.min.js': 'LeaderLine' }),
	]
};

export default config;
