export class Menu {
	constructor(params) {
		const defaultParams = {
			btn: '[data-menu-btn]',
			menu: '[data-menu]',
			activeClass: 'open-menu',
			btnActiveClass: 'active',
			closeBtns: ['a'],
			scrollTo: '', // чтобы скролил вначало родительского контейнера (смотри проект paketti megamenu > submenu), при открытии последнего пункта нужно было вручную скроллить до сабменю
		};

		this.params = { ...defaultParams, ...params };
		this.menu = this.params.menu;
		this.menuEl = document.querySelector(this.menu);
		this.btn = this.params.btn;
		this.btnEl = document.querySelectorAll(this.btn);
		this.init();
	}

	closeMenu(menu) {
		menu.classList.remove(this.params.activeClass);
		document.documentElement.classList.remove(this.params.activeClass);
		this.btnEl.forEach(btn => btn.classList.remove(this.params.btnActiveClass));
	}

	init() {
		document.addEventListener('click', (e) => {
			if (e.target.closest(this.btn)) {
				const btn = e.target.closest(this.btn);
				if (btn.tagName === 'A') {
					e.preventDefault();
				}
				const menu = this.menuEl;
				if (!menu) return;
				menu.classList.toggle(this.params.activeClass);
				document.documentElement.classList.toggle(this.params.activeClass);
					this.btnEl.forEach(btn => btn.classList.toggle(this.params.btnActiveClass));

				if (this.params.scrollTo) {
					const megaMenu = menu.closest(this.params.scrollTo);
					const menuRect = megaMenu.getBoundingClientRect();
					const subRect = menu.getBoundingClientRect();
					//console.log(menuRect);

					// Смещение subMenu относительно контейнера
					const scrollTop = megaMenu.scrollTop + (subRect.top - menuRect.top);

					megaMenu.scrollTo({
						top: scrollTop,
						behavior: 'smooth'
					});
				}
			}
			if (this.params.closeBtns.length) {
				const menu = this.menuEl;
				const allBtns = this.params.closeBtns.join(',');

				if (e.target.closest(allBtns)) {
					if (menu.classList.contains(this.params.activeClass)) {
						this.closeMenu(menu);
					}
				}
			}
		})
	}
}