// import adapter from '@sveltejs/adapter-auto';
import preprocess from "svelte-preprocess";
//import adapter from '@sveltejs/adapter-netlify';
import adapter from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: [
		preprocess({
		  postcss: true,
		}),
	],
};

export default config;
