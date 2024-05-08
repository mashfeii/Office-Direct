if (document.querySelectorAll('[data-counter]').length) {
	function digitsCounter(items) {
		let digitsCounters = items ? items : document.querySelectorAll('[data-counter]');
		if (digitsCounters) {
			digitsCounters.forEach(el => {
				digitsCounterAnimate(el);
			});
		}
	}

	function digitsCounterAnimate(item) {
		let StartTimestamp = null;
		const duration = parseInt(item.dataset.counter) ? parseInt(item.dataset.counter) : 1000;
		const startValue = parseInt(item.textContent);
		let plus = item.textContent.includes('+') ? true : false;
		const startPosition = 0;
		const step = timestamp => {
			if (!StartTimestamp) StartTimestamp = timestamp;
			const progress = Math.min((timestamp - StartTimestamp) / duration, 1);
			item.textContent =
				Math.floor(progress * (startPosition + startValue)) + `${plus ? '+' : ''}`;
			if (progress < 1) {
				window.requestAnimationFrame(step);
			}
		};

		window.requestAnimationFrame(step);
	}

	let options = {
		threshold: 0.8,
	};
	let observer = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const target = entry.target;
				const items = target.querySelectorAll('[data-counter]');
				if (items.length) {
					digitsCounter(items);
				}
				observer.unobserve(target);
			}
		});
	}, options);

	let sections = document.querySelectorAll('section');
	if (sections.length) {
		sections.forEach(section => {
			observer.observe(section);
		});
	}
}
