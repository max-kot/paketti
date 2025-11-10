import clsx from "clsx";
import "./product-bar.scss";

export default ({ className }) => {
	return (
		<aside className={clsx('box product-bar', className)}>
			<button className="product-bar__btn product-bar__filter-btn" data-filter-box-btn>Фильтры</button>
			<a className="product-bar__btn product-bar__hit-btn" href="#"><span>Хит</span><span className="checkbox"></span></a>
			<div className="product-bar__filter-sort filter-sort"><span>Сортировать:</span>
				<form>
					<select name="orderby" className="orderby" aria-label="Order selection" data-select="">
						<option value="menu_order" selected="selected">По умолчанию</option>
						<option value="popularity">По популярности</option>
						<option value="price">По возрастанию ценые</option>
						<option value="price-desc">
							По убыванию цены</option>
						<option value="date">По новизне</option>
					</select>
				</form>
			</div>
		</aside>
	)
}
