import clsx from "clsx";
import "./price-box.scss";

export default ({ className, data }) => {
	const { priceTax, oldPriceTax, price, oldPrice } = data;
	return (
		<div className={clsx('price-box', className)}>
			<div className="price-box__price-box">
				<span className="price-box__price">{priceTax}<span>р/шт</span></span>
				{oldPriceTax && <del className="price-box__price-old">{oldPriceTax}<span>р/шт</span></del>}
				<span className="price-box__text">с НДС</span>
			</div>
			<div className="price-box__price-box">
				<span className="price-box__price">{price}<span>р/шт</span></span>
				{oldPrice && <del className="price-box__price-old">{oldPrice} <span>р/шт</span></del>}
				<span className="price-box__text">без НДС</span>
			</div>
		</div>
	)
}
