import Icon from "@/ui/Icon/Icon";
import "./slider-section.scss";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/scss';
import "swiper/scss/autoplay";

export default ({ className, title, data }) => {
	return (
		<section className={clsx("section slider-section", className)} id="slider-section">
			<div className="container slider-section__container container--wide">
				<h2 className="title-2 slider-section__title">{title}</h2>
				<div className="slider-section__slider-box">
					<Swiper className="auto-slider slider-section__auto-slider">
						{data?.map((slide, i) => (
							<SwiperSlide className="auto-slider__slide" key={i}>
								<div className="slider-section__slide-wrapper">
									<div className="slider-section__image">
										<img src={slide.image} alt={slide.text} />
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
					<button
						className="auto-slider__btn auto-slider__btn-prev slider-section__btn-prev"
						type="button"
						aria-label="Назад"
					>
						<svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0.253178 12.6586L10.5303 23.7286C10.867 24.0911 11.4122 24.0905 11.7483 23.7267C12.0842 23.3631 12.0833 22.7739 11.7466 22.4111L2.08118 12L11.7469 1.58889C12.0836 1.22605 12.0845 0.637266 11.7486 0.273513C11.5801 0.0911567 11.3594 0 11.1386 0C10.9184 0 10.6985 0.0905461 10.5303 0.271637L0.253178 11.3414C0.0910174 11.5156 0 11.7529 0 12C0 12.2471 0.0912598 12.484 0.253178 12.6586Z" fill="currentColor" />
						</svg>

					</button>
					<button
						className="auto-slider__btn slider-section__btn auto-slider__btn-next slider-section__btn-next"
						type="button"
						aria-label="Вперёд"
					>
						<svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M11.7468 11.3414L1.4697 0.271403C1.13298 -0.0910845 0.58784 -0.0904761 0.251681 0.273278C-0.0841931 0.636943 -0.0833472 1.22612 0.253417 1.58891L9.91882 12L0.253095 22.4111C-0.0836285 22.7739 -0.0845193 23.3627 0.251356 23.7265C0.419859 23.9088 0.640599 24 0.861379 24C1.08155 24 1.30148 23.9095 1.46966 23.7284L11.7468 12.6586C11.909 12.4844 12 12.2471 12 12C12 11.7529 11.9087 11.516 11.7468 11.3414Z" fill="currentColor" />
						</svg>

					</button>
				</div>
			</div>
		</section>
	)
}
