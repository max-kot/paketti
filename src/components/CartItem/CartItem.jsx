import PriceBox from "../PriceBox/PriceBox";
import "./cart-item.scss";

export default ({ data }) => {
	const { title, image, sku, price } = data;
	return (
		<tr className="box cart-table__row ">
			<td className="cart-table__thumb">
				<a className="cart-table__link-image image-box" href="/">
					<img src={image} alt={title} />
				</a>
			</td>
			<td className="cart-table__info">
				<a className="cart-table__link-title" href="/">
					<h3 className="cart-table__title">{title}</h3>
					<p className="cart-table__sku">Арт. {sku}</p>
				</a>
			</td>
			<td className="cart-table__counter">
				<div className="cart-table__select-box">
					<input type="number" value="25" min="25" step="25" />
					<select>
						<option value="pcs" selected>шт</option>
						<option value="block">блк</option>
						<option value="boxes">кор</option>
					</select>
				</div>
			</td>
			<td className="cart-table__price">
				<PriceBox data={price} className="cart-table__price-box"/>
			</td>
			<td className="cart-table__remove">
				<button className="cart-table__remove-btn">
					<svg
						width="10"
						height="10"
						viewBox="0 0 10 10"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M5 5L9.5 9.5M5 5L0.5 0.5M5 5L0.5 9.5M5 5L9.5 0.5"
							stroke="currentColor"
							strokeLinecap="round"
						/>
					</svg>
				</button>
			</td>
		</tr>
	)
}
