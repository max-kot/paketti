/**
 * data-excerpt-box="id-1" ==> для box
 * data-excerpt-btn="id-1" ==> для кнопки
 * showChild ==> сколько дочерних элементов показывать 
 * media ==> работа плагина с определённого экрана 'max-width: 768px'
 * offset ==> добавиться к высоте закрытия элементов
 * ! ==> без CSS
 */
export class ExcerptBox {
	constructor(params) {
		const defaultParams = {
			selector: '[data-excerpt-box]',
			btn: '[data-excerpt-btn]',
			activeClass: 'excerpt-active',
			offset: 0,
			media: false,
			showChild: 1,
			closeTextAttr: 'data-excerpt-btn-close',
			transition: 'all 0.3s',
		};
		this.params = { ...defaultParams, ...params };
		this.btns = document.querySelectorAll(this.params.btn);

		// сохраняем ссылку на обработчик
		this.boundClickHandler = this.clickFunction.bind(this);

		this.init();
	}

	showBox(box) {
		box.style.height = `${box.getAttribute('data-excerpt-box-height')}px`;
		box.style.overflow = 'visible';
	}

	hideBox(box) {
		box.style.height = `${box.getAttribute('data-excerpt-box-child-height')}px`;
		box.style.overflow = 'hidden';
	}

	hideContent(media) {
		this.btns.forEach(btn => {
			const id = btn.getAttribute('data-excerpt-btn');
			const box = document.querySelector(`[data-excerpt-box=${id}]`);
			if (!box) return;

			const childrenHeight = [...Array.from(box.children)]
				.slice(0, this.params.showChild)
				.reduce((acc, item) => acc + item.scrollHeight, 0) + Number(this.params.offset);

			box.setAttribute('data-excerpt-box-height', box.scrollHeight);
			box.setAttribute('data-excerpt-box-child-height', childrenHeight);
			if (this.params.transition) box.style.transition = this.params.transition;

			if (!media) {
				this.showBox(box);
			} else {
				this.hideBox(box);
			}
		});
	}

	clickFunction(e) {
		if (e.target.closest(this.params.btn)) {
			const btn = e.target.closest(this.params.btn);
			const id = btn.getAttribute('data-excerpt-btn');
			const box = document.querySelector(`[data-excerpt-box=${id}]`);

			if (!btn.classList.contains(this.params.activeClass)) {
				this.showBox(box);
			} else {
				this.hideBox(box);
			}

			box.classList.toggle(this.params.activeClass);

			btn.classList.toggle(this.params.activeClass);
			if (this.params.closeTextAttr && btn.getAttribute(this.params.closeTextAttr)) {
				const text = btn.textContent;
				btn.textContent = btn.getAttribute(this.params.closeTextAttr);
				btn.setAttribute(this.params.closeTextAttr, text);
			}

		}
	}

	clickHandler(media) {
		if (media) {
			document.addEventListener('click', this.boundClickHandler);
		} else {
			document.removeEventListener('click', this.boundClickHandler);
		}
	}

	init() {
		if (!this.btns.length) return;
		const launchExcerptBox = (media = true) => {
			this.hideContent(media);
			this.clickHandler(media);
		};

		const launchHandler = () => {
			if (this.params.media) {
				const mediaQuery = window.matchMedia(`(${this.params.media})`);
				launchExcerptBox(mediaQuery.matches);
			} else {
				launchExcerptBox();
			}
		};

		window.addEventListener('load', launchHandler);
		window.addEventListener('resize', launchHandler);
	}
}
