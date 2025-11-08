import "./menu.scss";
import clsx from "clsx";

export default ({ className, data }) => {
	return (
		<nav className={clsx("menu", className)}>
			<ul className="menu__list">
				{data?.map(({ text, href }) => <li className="menu__item" key={text}><a className="menu__link link" href={href} title={text}>{text}</a></li>)}
			</ul>
		</nav>
	)
}