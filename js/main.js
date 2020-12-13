document.addEventListener('DOMContentLoaded', () => {
	let nav = document.querySelectorAll('.info-skill li');
	let detailModal = document.querySelectorAll('.modal');
	let overlay = document.querySelector('.overlay');
	let overlayBtn = document.querySelector('.overlay button');

	// console.log(nav);
	if (nav) {
		nav.forEach((element, key) => {
			element.addEventListener('click', () => {
				detailModal.forEach(function (modalEl, modalKey) {
					if (key === modalKey) {
						modalEl.classList.add('showModal');
						overlay.classList.add('showModal');
					}
					overlayBtn.addEventListener('click', () => {
						overlay.classList.remove('showModal');
						modalEl.classList.remove('showModal');
					});
				});
			});
		});
	}
});
