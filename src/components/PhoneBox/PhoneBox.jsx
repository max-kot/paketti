import clsx from "clsx"
import "./phone-box.scss";
export default ({ className, data }) => {
	return (
		<ul className={clsx('phone-box', className)}>
			{data?.map(({ text, href, tg, viber, type, icon }) => {
				let hrefMod;
				if (type === 'email') {
					hrefMod = `mailto:${href}`
				} else if (type === 'link') {
					hrefMod = href;
				} else if (type === 'address') {
					hrefMod = href;
				} else {
					hrefMod = `tel:${href}`
				}

				let iconType;

				if (icon) {
					iconType = `url("${icon}")`;
				} else if (type === 'address') {
					iconType = 'url("../images/icons/pin.svg")'
				} else if (type === 'email') {
					iconType = 'url("../images/icons/email.svg")'
				} else {
					iconType = 'url("../images/icons/phone.svg")'
				}

				return (
					<li className={clsx("phone-box__item", icon && 'custom-icon')} key={text} style={{ '--item-icon': iconType }}>
						<a className="phone-box__link" href={hrefMod} target="_blank" rel="noreferrer">{text}</a>
						{viber && <a className="phone-box__icon-link" href={`tel:${href}`} aria-label="Перейти в Вайбер">
							<img src="images/icons/viber.svg" alt="Вайбер" />
						</a>}
						{tg && <a className="phone-box__icon-link" href={`tel:${href}`} aria-label="Перейти в Телеграм">
							<img src="images/icons/tg.svg" alt="Телеграм" />
						</a>}
					</li>
				)
			})}
		</ul>
	)
}