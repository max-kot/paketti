import clsx from "clsx";
import "./filters-block.scss";
const categories = [
	'Фольга',
	'Формы алюминиевые',
	'Мешки кондитерские',
	'Хозяйственные губки, салфетки',
	'Пакеты',
	'Гигиеническая продукция',
	'Бытовая химия',
	'Барные аксессуары',
	'Упаковка для фастфуда',
	'Одноразовая посуда и аксессуары',
	'Сезонные предложения',
	'Кондитерская упаковка',
	'Барные аксессуары',
	'Пакеты',
]
const brands = ['Kugoo', 'Skyboard', 'White Siberia', 'GreenCamel', 'Kugoo', 'Kugoo', 'Skyboard', 'White Siberia', 'GreenCamel'];

export default ({ className }) => {
	return (
		<aside className={clsx('box filters', className)} data-filter-box>
			<h3 className="filters__title">Фильтры</h3>
			<form className="filters__form" action="">
				<div className="filter-block filters__category">
					<h4 className="filter-block__title">Категории</h4>
					<ul className="filter-block__list" data-excerpt-box="cat-1" data-excerpt-filter-box>
						{categories?.map(cat => <li className="filter-block__item" key={cat}><a className="filter-block__link" href="#">{cat}</a></li>)}
					</ul>
					<button className="link" data-excerpt-btn="cat-1" data-excerpt-filter-btn type="button" data-excerpt-btn-close="Скрыть">Показать все ({categories.length})</button>
				</div>
				<div className="filter-block filters__brands">
					<div className="filter-block__top">
						<h4 className="filter-block__title">Бренд</h4>
						<button className="filter-block__reset link" type="button" data-reset-input="[data-filter-brand]">Очистить</button>
					</div>
					<ul className="filter-block__list filter-block__list--no-dots" data-excerpt-box="cat-2" data-excerpt-filter-box>
						{brands?.map(brand => (
							<li className="filter-block__item" key={brand}>
								<div className="input-checkbox">
									<label className="input-checkbox__label">
										<input className="input-checkbox__input" type="checkbox" data-filter-brand />
										<span className="input-checkbox__checkbox checkbox"></span>
										<span className="input-checkbox__text">{brand}</span>
									</label>
								</div>
							</li>))}
					</ul>
					<button className="link" data-excerpt-btn="cat-2" data-excerpt-filter-btn type="button" data-excerpt-btn-close="Скрыть">Показать все ({brands.length})</button>
				</div>
				<div className="filter-block filters__range-slider">
					<div className="filter-block__top">
						<h4 className="filter-block__title">Стоимость, BYN</h4>
					</div>
					<div className="filter-block__range-slider range-slider">
						<div className="range-slider__input-box">
							<input type="number" className="range-slider__input range-slider__input--from" value="0" data-range-slider-input-from />
							<input type="number" className="range-slider__input range-slider__input--to" value="0" data-range-slider-input-to />
						</div>
						<div className="range-slider__slider">
							<input type="text" className="js-range-slider" value="" data-range-slider data-range-slider-min="100" data-range-slider-max="2800" />
						</div>
					</div>
				</div>
				<div className="filter-block filters__presence">
					<div className="filter-block__top">
						<h4 className="filter-block__title">Наличие</h4>
						<button className="filter-block__reset link" type="button" data-reset-input="[data-filter-presence]">Очистить</button>
					</div>
					<ul className="filter-block__list filter-block__list--no-dots">
						{['В наличии', 'Нет в наличии']?.map((item, i) => (
							<li className="filter-block__item" key={item}>
								<div className="input-checkbox">
									<label className="input-checkbox__label">
										<input className="input-checkbox__input" type="checkbox" data-filter-presence checked={!i} />
										<span className="input-checkbox__checkbox checkbox"></span>
										<span className="input-checkbox__text">{item}</span>
									</label>
								</div>
							</li>))}
					</ul>
				</div>
				<button className="filters__btn btn" type="submit">Применить</button>
				<button className="filters__btn btn btn--stroke" type="reset">Сбросить все фильтры</button>
			</form>
		</aside>
	)
}
