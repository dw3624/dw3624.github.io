/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: '/',
				destination: '/posts',
				permanent: false,
			},
		]
	},
}

export default nextConfig
