import clsx from "clsx"
import './header-menu.scss';

export default ({ data, className }) => {
	return (
		<nav className={clsx('header-menu', className)}>
			<ul className="header-menu__list">
				{data?.map(({ text, href }) => <li key={text}><a href={href}>{text}</a></li>)}
			</ul>
		</nav>
	)
}
