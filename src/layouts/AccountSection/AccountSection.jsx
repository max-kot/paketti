import Section from "@/ui/Section/Section";
import "./account-section.scss";
import clsx from "clsx";
const links = ['Учетная запись', 'История заказов', 'Избранное'];

export default ({ page = 0, content, className}) => {
	return (
		<Section className="account-section">
			<nav className="account-section__menu account-nav">
				<ul className="account-nav__list">
					{links?.map((link, i) => (
						<li className="account-nav__item" key={link} data-auto-calc="account-nav-link, width" >
							<a className={clsx("account-nav__link", Number(page) === i && 'active')} href="/">{link}</a>
						</li>
					))}
				</ul>
			</nav>
			<div className={clsx("account-section__content box", className)} style={{ '--offset-pos': Number(page) }}>
				{content}
			</div>
		</Section>
	)
}
