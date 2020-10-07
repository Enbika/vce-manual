self.addEventListener('install', event => {
	event.waitUntil(
		caches.open('vce-manual').then(cache => {
			return cache.addAll([
				'./',
				'favicon.ico',
				'manifest.json',

				'assets/style.css',
				'assets/script.js',
				'assets/button.png',
				'assets/script-code-256.png',

				// not all icons and emotes are actually used
				'assets/icons/information.png',
				'assets/icons/beginner.png',
				'assets/icons/advanced.png',

				'assets/emotes/emoticon_waii.png',
				'assets/emotes/emoticon_grin.png',
				'assets/emotes/heart.png',
				'assets/emotes/emoticon_unhappy.png'
			]);
		})
	);
});

self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request).then(response => {
			console.log(event.request.url + "\t" + (response ? true : false));
			return response || fetch(event.request);
		})
	);
});
