import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/scss';
import "swiper/scss/autoplay";

import "./slider.scss";

const defaultSliderParams = {
	slidesPerView: 1,
	spaceBetween: 30,
	centeredSlides: true,
	navigation: {
		nextEl: '[data-slider-btn-next]',
		prevEl: '[data-slider-btn-prev]',
	},

	pagination: {
		el: '[data-slider-pagination]',
		clickable: true,
		renderBullet: function (index, className) {
			index = index + 1;
			return `<button type="button"
			class="className"><span class="className-number">${index < 10 ? '0' + index : index}</span></button>`;
		},
	},

	scrollbar: {
		el: '[data-slider-scrollbar]',
		draggable: true,
	},

	thumbs: {
		//swiper: SliderVar,
	},
}


export default ({ slides = [], params = defaultSliderParams, component, children }) => {

	const Component = component;
	return (
		<Swiper data-slider={JSON.stringify({ ...params })}>
			{slides.map((slide, i) => <SwiperSlide key={i}>{<Component data={slide} />}</SwiperSlide>)}
			{children}
		</Swiper>
	)
}
