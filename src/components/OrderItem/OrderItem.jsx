import clsx from "clsx";
import "./order-item.scss";

export default ({ data }) => {
	const { date, number, list, statusLabel, descr, price, className } = data;
	return (
		<tr className="order-table__row box">
			<td className="order-table__info">
				<span className="order-table__date">{date}</span>
				<h3 className="order-table__number title-3">Заказ №{number}</h3>
				<a className="order-table__btn btn btn--stroke" href="/" target="_blank">
					<span className="order-table__btn-text">Распечатать</span>
					<span className="order-table__btn-icon">
						<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M13.5 10.125H13.625C14.3272 10.125 14.6783 10.125 14.9306 9.95647C15.0398 9.88351 15.1335 9.78976 15.2065 9.68057C15.375 9.42835 15.375 9.07723 15.375 8.375C15.375 6.97054 15.375 6.26831 15.0379 5.76386C14.892 5.54548 14.7045 5.35798 14.4861 5.21206C13.9817 4.875 13.2795 4.875 11.875 4.875H6.625C4.73938 4.875 3.79657 4.875 3.21079 5.46079C2.625 6.04657 2.625 6.98938 2.625 8.875V9.125C2.625 9.5964 2.625 9.83211 2.77145 9.97855C2.91789 10.125 3.1536 10.125 3.625 10.125H4.5" stroke="currentColor" />
							<path d="M4.875 14.6813L4.875 9.125C4.875 8.18219 4.875 7.71079 5.16789 7.41789C5.46079 7.125 5.93219 7.125 6.875 7.125L11.125 7.125C12.0678 7.125 12.5392 7.125 12.8321 7.41789C13.125 7.71079 13.125 8.18219 13.125 9.125L13.125 14.6813C13.125 14.9978 13.125 15.1561 13.0212 15.231C12.9174 15.3058 12.7672 15.2557 12.4669 15.1556L11.0488 14.6829C10.9628 14.6543 10.9198 14.6399 10.8755 14.6412C10.8311 14.6425 10.7891 14.6594 10.7049 14.693L9.1857 15.3007C9.094 15.3374 9.04815 15.3557 9 15.3557C8.95185 15.3557 8.906 15.3374 8.8143 15.3007L7.29505 14.693C7.21092 14.6594 7.16885 14.6425 7.12452 14.6412C7.08019 14.6399 7.03721 14.6543 6.95125 14.6829L5.53311 15.1556C5.2328 15.2557 5.08264 15.3058 4.97882 15.231C4.875 15.1561 4.875 14.9978 4.875 14.6813Z" stroke="currentColor" />
							<path d="M7.125 10.125L10.125 10.125" stroke="currentColor" strokeLinecap="round" />
							<path d="M7.125 12.375L10.875 12.375" stroke="currentColor" strokeLinecap="round" />
							<path d="M13.125 4.875C13.125 3.75346 13.125 3.19269 12.8838 2.775C12.7259 2.50137 12.4986 2.27414 12.225 2.11615C11.8073 1.875 11.2465 1.875 10.125 1.875H7.875C6.75346 1.875 6.19269 1.875 5.775 2.11615C5.50137 2.27414 5.27414 2.50137 5.11615 2.775C4.875 3.19269 4.875 3.75346 4.875 4.875" stroke="currentColor" />
						</svg>
					</span>
				</a>
			</td>
			<td className="order-table__details">
				<p className="order-table__quantity">Кол-во товаров: {list.length}</p>
				<ul className="order-table__list">
					{list?.map(item => (
						<li className="order-table__item" key={item}>
							<a className="order-table__link" href="#" target="_blank">
								<span>{item.name}</span>
								<span>{item.value}</span>
							</a>
						</li>
					))}
				</ul>
			</td>
			<td className="order-table__status-price">
				<div className="order-table__status">
					<p className={clsx("order-table__status-label", className)}>{statusLabel}</p>
					<div className="order-table__status-descr">
						{descr}
					</div>
				</div>
				<div className="order-table__price">{price} р</div>
				<a className="order-table__cancel-link link" href="#">Отменить заказ</a>
			</td>
		</tr>
	)
}
