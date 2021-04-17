import icon192 from './_favicon.png?width=192&height=192&format=png';
import icon512 from './_favicon.png?width=512&height=512&format=png';

export const get = async () => {
	return {
        body: {
            // TODO: rest of the manifest
			icons: [
				{
					src: icon192,
					type: 'image/png',
					sizes: '192x192'
				},
				{
					src: icon512,
					type: 'image/png',
					sizes: '512x512'
				}
			]
		}
	};
};
