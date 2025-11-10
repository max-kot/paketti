//import Swiper from "swiper";
//import { Navigation, Autoplay } from 'swiper/modules';

//import "ion-rangeslider";

import { Fancybox } from "@fancyapps/ui";

import { Menu } from "./modules/Menu";
import { AutoCalc } from "./modules/AutoCalc";
import { CustomSelect } from "./modules/CustomSelect";
import { ExcerptBox } from "./modules/ExcerptBox";
import { cookies } from "./modules/Cookies";
import { ScrollToTop } from "./modules/ScrollToTop";
import { ResetInput } from "./modules/ResetInput";


//import { jarallax } from "jarallax";
//import 'jarallax/dist/jarallax.min.css';
Fancybox.bind("[data-fancybox]", {});


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
new Menu({
	menu: '[data-filter-box]',
	btn: '[data-filter-box-btn]',
	activeClass: 'filter-open',
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


new ExcerptBox({
	selector: '[data-excerpt-media]',
	btn: '[data-excerpt-media-btn]',
	media: 'max-width: 768px',
});
new ExcerptBox({
	selector: '[data-excerpt-filter-box]',
	btn: '[data-excerpt-filter-btn]',
	showChild: 4,
});

cookies();

new ScrollToTop()

//jarallax(document.querySelectorAll('.jarallax'), {
//	speed: 0.2,
//});

new ResetInput();


$(function () {
	const $range = $("[data-range-slider]");
	const $inputFrom = $("[data-range-slider-input-from]");
	const $inputTo = $("[data-range-slider-input-to]");
	let instance;
	const min = Number($("[data-range-slider-min]").attr("data-range-slider-min"));
	const max = Number($("[data-range-slider-max]").attr("data-range-slider-max"));
	let from = 0;
	let to = 0;

	$range.ionRangeSlider({
		skin: "round",
		type: "double",
		min: min,
		max: max,
		onStart: updateInputs,
		onChange: updateInputs
	});
	instance = $range.data("ionRangeSlider");

	function updateInputs(data) {
		from = data.from;
		to = data.to;

		$inputFrom.prop("value", from);
		$inputTo.prop("value", to);
	}

	$inputFrom.on("input", function () {
		var val = $(this).prop("value");

		// validate
		if (val < min) {
			val = min;
		} else if (val > to) {
			val = to;
		}

		instance.update({
			from: val
		});
	});

	$inputTo.on("input", function () {
		var val = $(this).prop("value");

		// validate
		if (val < from) {
			val = from;
		} else if (val > max) {
			val = max;
		}

		instance.update({
			to: val
		});
	});
});