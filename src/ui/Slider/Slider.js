import { getParams } from '@/utils/getParams';
import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar, Autoplay} from 'swiper/modules';

const rootSelector = '[data-slider]';

export class Slider {
	selectors = {
		swiper: '[data-slider]',
		paramsAttr: '[data-slider]',
	}

	constructor(rootElement) {
		this.swiperElement = rootElement || rootSelector;
		this.params = { ...getParams(document.querySelector(this.selectors.paramsAttr), this.selectors.paramsAttr), modules: [] };
		if (this.params.navigation) {
			this.params.modules.push(Navigation)
		}
		if (this.params.pagination) {
			this.params.modules.push(Pagination)
		}
		if (this.params.scrollbar) {
			this.params.modules.push(Scrollbar)
		}
		if (this.params.autoplay) {
			this.params.modules.push(Autoplay)
		}
		if (this.params.pagination.renderBulletMarkup) {
			this.params.pagination.renderBullet = (i, className) => `<button class="${className}">${this.params.pagination.renderBulletMarkup === 'index' ? i : this.params.pagination.renderBulletMarkup}</button>`;
		}
		this.init()
	}

	init() {
		new Swiper(this.swiperElement, {
			...this.params,
		})
	}
}

export class SliderCollection {
	constructor() {
		this.init()
	}

	init() {
		document.querySelectorAll(rootSelector).forEach((element) => {
			new Slider(element)
		})
	}
}