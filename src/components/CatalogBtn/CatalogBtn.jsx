import clsx from "clsx"
import "./catalog-btn.scss";

export default ({ children, className, ...attr}) => {
	return (
		<button className={clsx('catalog-btn', className)} {...attr}>
			<span className="catalog-btn__icon">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M2 6H22M2 12H22M2 18H22" stroke="currentColor" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" />
				</svg>
			</span>
			<span className="catalog-btn__text">{children}</span>
		</button>
	)
}
