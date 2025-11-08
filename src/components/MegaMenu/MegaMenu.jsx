import clsx from "clsx";
import "./mega-menu.scss";

export default ({ className, data, attr, ...props }) => {
	return (
		<nav className={clsx('mega-menu', className)} {...props}>
			<ul className="mega-menu__list">
				{data?.map(({ text, href, sublist, attr }, i) => {
					const parentName = text;
					const parentHref = href;

					return (
						<li className="mega-menu__item" key={text}>
							{sublist ? (
								// если есть подменю → кнопка с data-sub-menu-btn
								<button className="mega-menu__btn" data-sub-menu-btn={i}>
									<a className="mega-menu__link" href={href} {...attr}>
										{text}
									</a>
								</button>
							) : (
								// если подменю нет → просто ссылка
								<a className="mega-menu__link" href={href} {...attr}>{text}</a>
							)}

							{sublist && (
								<ul className="mega-menu__sub-list" data-sub-menu={i}>
									<li className="mega-menu__sub-list-parent-item" key={text}>
										<button className="mega-menu__sub-list-btn" data-sub-menu-close={i}>
											<a
												className="mega-menu__sub-list-parent-link"
												href={parentHref}
											>
												{parentName}
											</a>
										</button>
									</li>
									{sublist.map(({ text, href }) => (
										<li className="mega-menu__sub-list-item" key={text}>
											<a className="mega-menu__sub-list-link" href={href}>
												{text}
											</a>
										</li>
									))}
								</ul>
							)}
						</li>
					);
				})}
			</ul>
		</nav>
	)
}
