import Swiper from "swiper";
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';

import { Menu } from "./modules/Menu";
import { AutoCalc } from "./modules/AutoCalc";
import { CustomSelect } from "./modules/CustomSelect";
import { ListHider } from "./modules/ListHider";
import { cookies } from "./modules/Cookies";
import { ScrollToTop } from "./modules/ScrollToTop";
//import { jarallax } from "jarallax";
//import 'jarallax/dist/jarallax.min.css';

new AutoCalc();
new Menu({
	menu: '[data-mega-menu]',
	btn: '[data-mega-menu-btn]',
	closeBtns: ['[data-add-menu-btn]'],
});
new Menu({
	menu: '[data-add-menu]',
	btn: '[data-add-menu-btn]',
	closeBtns: ['[data-mega-menu-btn]'],
	activeClass: 'add-menu-open',
});
document.querySelectorAll('[data-sub-menu-btn')?.forEach(btn => {
	const id = btn.getAttribute('data-sub-menu-btn');

	new Menu({
		menu: `[data-sub-menu="${id}"]`,
		btn: `[data-sub-menu-btn="${id}"]`,
		activeClass: 'sub-menu-open',
		closeBtns: [`[data-sub-menu-close="${id}"]`, '[data-mega-menu-btn]'],
		scrollTo: '[data-mega-menu]',
	});

})

new CustomSelect({
	selector: 'select'
});

new Swiper('.auto-slider', {
	slidesPerView: 'auto',
	loop: true,
	spaceBetween: 8,
	autoplay: {
		delay: 5000,
	},
	modules: [Navigation, Autoplay],

	// Navigation arrows
	navigation: {
		nextEl: '.auto-slider__btn-next',
		prevEl: '.auto-slider__btn-prev',
	},

	breakpoints: {
		// when window width is >= 640px
		640: {
			spaceBetween: 24,
		},
	}
})

new ListHider('[data-list-hider]', {
	skipElements: 1,
	button: {
		openText: 'Показать больше',
		closeText: 'Скрыть',
	},
	media: 'max-width: 768px',
	offsetHeight: 0,
})

cookies();

new ScrollToTop()

//jarallax(document.querySelectorAll('.jarallax'), {
//	speed: 0.2,
//});