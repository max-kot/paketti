export class ResetInput {
	constructor(selector, attr) {
		this.selector = selector || '[data-reset-input]';
		this.attr = attr || 'data-reset-input'

		this.btns = document.querySelectorAll(this.selector);
		this.init();
	}

	init() {
		if (!this.btns.length) { return };

		document.addEventListener('click', e => {
			if (e.target.closest(this.selector)) {
				const btn = e.target.closest(this.selector);
				const inputs = document.querySelectorAll(btn.getAttribute(this.attr));
				
				if (!inputs.length) { return };

				inputs.forEach(input => input.checked = false);
			}
		})
	}
}