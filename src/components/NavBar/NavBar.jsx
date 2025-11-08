import clsx from "clsx";
import "./nav-bar.scss";

export default ({ className, data, ...attrs}) => {
	return (
		<nav className={clsx('nav-bar', className)} data-auto-calc="nav-bar, height" {...attrs}>
			<ul className="nav-bar__list">
				{data?.map(({text, href, icon, attrs, counter, className}) => (
					<li className={clsx('nav-bar__item', className)} key={text}>
						<a className="nav-bar__link" href={href} {...attrs}>
							{counter && <span className="nav-bar__counter">{counter}</span>}
							{icon && <span className="nav-bar__icon">{icon}</span>}
							<span className="nav-bar__text">{text}</span>
						</a>
					</li>
				))}
			</ul>
		</nav>
	)
}
