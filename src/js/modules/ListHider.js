function deepMerge(target, source) {
	for (const key in source) {
		if (source[key] instanceof Object && key in target) {
			Object.assign(source[key], deepMerge(target[key], source[key]));
		}
	}
	return { ...target, ...source };
}

export class ListHider {
	constructor(selector, options) {
		const defaultOptions = {
			height: 0,
			skipElements: 4,
			offsetHeight: 10,
			hideButton: true,
			button: {
				selector: '[data-list-hider-btn]',
				openText: 'Show more',
				closeText: 'Hide',
				toggleClass: 'list-hider-btn-active',
				initialClass: '',
				hiddenClass: 'list-hider-btn-hidden', // класс для скрытой кнопки
			},
			list: {
				selector: '[data-list-hider-list]',
			},
			toggleClass: 'list-hider-active',
			isOpen: false,
			media: false, // false — всегда, или 'max-width: 768px' и т.д.
		};

		this.selector = selector;
		this.options = deepMerge(defaultOptions, options);
		this.allElements = document.querySelectorAll(selector);

		this.mediaQuery = null;
		this.isActive = false;

		this.boundCheck = this.checkMedia.bind(this);
		this.init();
	}

	init() {
		if (!this.options.media) {
			this.enable();
			return;
		}

		this.mediaQuery = window.matchMedia(`(${this.options.media})`);
		this.mediaQuery.addEventListener('change', this.boundCheck);
		this.checkMedia();
	}

	checkMedia() {
		if (this.mediaQuery.matches) {
			if (!this.isActive) this.enable();
		} else {
			if (this.isActive) this.disable();
		}
	}

	enable() {
		this.isActive = true;
		this.allElements.forEach(elem => this.initElement(elem));
	}

	disable() {
		this.isActive = false;

		this.allElements.forEach(elem => {
			const list = elem.querySelector(this.options.list.selector);
			const btn = elem.querySelector(this.options.button.selector);

			if (list) {
				list.style.height = 'auto';
				list.style.overflow = '';
			}

			if (btn) {
				// 👇 вместо удаления — просто скрываем кнопкой через класс
				btn.classList.add(this.options.button.hiddenClass);
				if (btn._listHiderHandler) {
					btn.removeEventListener('click', btn._listHiderHandler);
					delete btn._listHiderHandler;
				}
			}

			elem.classList.remove(
				this.options.toggleClass,
				'list-hider-hide',
				'list-hider-open'
			);
		});
	}

	initElement(elem) {
		const list = elem.querySelector(this.options.list.selector);
		if (!list) return;

		list.style.overflow = 'hidden';

		const calcHeights = () => {
			const listHeight = list.scrollHeight;
			let hideHeight = 0;

			if (this.options.height > 0) {
				hideHeight = this.options.height;
			} else if (this.options.skipElements > 0) {
				let childrenHeight = [];
				for (let i = 0; i < this.options.skipElements && i < list.children.length; i++) {
					childrenHeight.push(list.children[i].offsetHeight);
				}
				hideHeight = parseInt(
					childrenHeight.reduce((prev, current) => prev + current, this.options.offsetHeight)
				);
			}
			return { listHeight, hideHeight };
		};

		const { listHeight, hideHeight } = calcHeights();

		let btn = elem.querySelector(this.options.button.selector);
		if (!btn) {
			btn = document.createElement('button');
			btn.type = 'button';
			btn.setAttribute('data-list-hider-btn', '');

			if (this.options.button.initialClass.trim() !== '') {
				btn.className = this.options.button.initialClass;
			}

			elem.appendChild(btn);
		}

		// 👇 делаем кнопку видимой, если она была скрыта ранее
		btn.classList.remove(this.options.button.hiddenClass);

		const updateState = (isOpen) => {
			this.options.isOpen = isOpen;

			btn.innerHTML = isOpen
				? this.options.button.closeText
				: this.options.button.openText;

			list.style.height = isOpen ? list.scrollHeight + 'px' : hideHeight + 'px';
			elem.classList.toggle(this.options.toggleClass, isOpen);
			elem.classList.toggle('list-hider-open', isOpen);
			elem.classList.toggle('list-hider-hide', !isOpen);
			btn.classList.toggle(this.options.button.toggleClass, isOpen);
		};

		updateState(this.options.isOpen);

		const toggleHandler = () => {
			updateState(!this.options.isOpen);
		};

		btn._listHiderHandler = toggleHandler;
		btn.addEventListener('click', toggleHandler);

		const resizeHandler = () => {
			const { listHeight: newListHeight, hideHeight: newHideHeight } = calcHeights();
			list.style.height = this.options.isOpen
				? newListHeight + 'px'
				: newHideHeight + 'px';
		};

		window.addEventListener('resize', resizeHandler);
	}
}
