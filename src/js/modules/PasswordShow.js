export class PasswordShow {
	constructor(params) {
		const defaultParams = {
			selector: 'input[type="password"]',
			btnClass: 'password-show-btn',
			activeClass: 'password-show-btn-active',
			btnContentShow: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="9.99935" cy="10.0003" r="2.83333" stroke="currentColor"/> <path d="M16.6798 8.93999C17.0712 9.4024 17.2669 9.63361 17.2669 10C17.2669 10.3664 17.0712 10.5976 16.6798 11.06C15.4376 12.5277 12.9127 15 10 15C7.08732 15 4.56244 12.5277 3.32019 11.06C2.9288 10.5976 2.7331 10.3664 2.7331 10C2.7331 9.63361 2.9288 9.4024 3.32019 8.93999C4.56244 7.47233 7.08732 5 10 5C12.9127 5 15.4376 7.47233 16.6798 8.93999Z" stroke="currentColor"/></svg>',
			btnContentHide: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.83789 9.12598C7.72872 9.39591 7.66801 9.69094 7.66797 10C7.6681 11.2884 8.71254 12.3338 10.001 12.334C10.3103 12.334 10.6048 12.2715 10.875 12.1621L11.6221 12.9092C11.1418 13.1775 10.5902 13.334 10.001 13.334L9.83008 13.3291C8.06879 13.24 6.6681 11.7834 6.66797 10C6.66803 9.41091 6.82067 8.85716 7.08887 8.37695L7.83789 9.12598ZM10.001 6.66699C11.8418 6.66699 13.3348 8.1592 13.335 10L13.3301 10.1719C13.3269 10.2349 13.3211 10.2973 13.3145 10.3594L12.2109 9.25684C11.9786 8.56628 11.4341 8.02082 10.7432 7.78906L9.64062 6.68555C9.75898 6.67281 9.87924 6.667 10.001 6.66699Z" fill="currentColor"/><path d="M5.87305 7.16016C4.97211 7.85775 4.2245 8.64675 3.70312 9.2627C3.27638 9.76687 3.23438 9.85235 3.23438 10C3.23438 10.1476 3.27638 10.2331 3.70312 10.7373C4.30862 11.4526 5.21852 12.4023 6.32031 13.1699C7.42553 13.9399 8.68541 14.5 10.001 14.5C10.8879 14.5 11.7487 14.2436 12.5547 13.8418L13.2959 14.583C12.3091 15.1213 11.1939 15.5 10.001 15.5C8.40387 15.5 6.94498 14.8234 5.74902 13.9902C4.54994 13.1549 3.57615 12.135 2.93945 11.3828C2.58346 10.9622 2.23437 10.5851 2.23438 10C2.23438 9.41494 2.58346 9.03777 2.93945 8.61719C3.46848 7.99217 4.23179 7.18439 5.16211 6.44922L5.87305 7.16016ZM10.001 4.5C11.5981 4.5 13.057 5.17662 14.2529 6.00977C15.452 6.8451 16.4258 7.86495 17.0625 8.61719C17.4185 9.03777 17.7676 9.41494 17.7676 10C17.7676 10.5851 17.4185 10.9622 17.0625 11.3828C16.7148 11.7936 16.2649 12.2825 15.7344 12.7793L15.0273 12.0723C15.5317 11.6021 15.9628 11.1343 16.2988 10.7373C16.7256 10.2331 16.7676 10.1476 16.7676 10C16.7676 9.85235 16.7256 9.76687 16.2988 9.2627C15.6933 8.54737 14.7834 7.59767 13.6816 6.83008C12.5764 6.06015 11.3165 5.5 10.001 5.5C9.54117 5.5 9.08846 5.56951 8.64648 5.69141L7.85059 4.89551C8.52809 4.64993 9.24922 4.5 10.001 4.5Z" fill="currentColor"/><path d="M3.5 3L16.8333 16.3333" stroke="currentColor"/></svg>',
		}

		this.params = { ...defaultParams, ...params };
		this.inputs = document.querySelectorAll(this.params.selector);

		this.init();
	}

	createButton(parent) {
		const btn = document.createElement('button');
		btn.classList.add(this.params.btnClass);
		btn.setAttribute('type', 'button');
		btn.innerHTML = this.params.btnContentShow;

		if (parent.tagName === 'INPUT') {
			parent.parentElement.appendChild(btn)
		} else {
			parent.appendChild(btn);
		}
	}

	init() {
		if (!this.inputs.length) { return };

		this.inputs.forEach(input => {
			this.createButton(input)
		})

		document.addEventListener('click', (e) => {
			if (e.target.closest(`.${this.params.btnClass}`)) {
				e.preventDefault();
				const btn = e.target.closest(`.${this.params.btnClass}`);
				const field = btn.closest(this.params.selector) || btn.parentElement.querySelector('input');
				const input = field.tagName === 'INPUT' ? field : field.querySelector('input');

				if (input.getAttribute('type') === 'password') {
					input.setAttribute('type', 'text');
					btn.classList.add(this.params.activeClass);
					btn.innerHTML = this.params.btnContentHide;
				} else {
					input.setAttribute('type', 'password');
					btn.classList.remove(this.params.activeClass);
					btn.innerHTML = this.params.btnContentShow;
				}
			}
		})
	}
}

