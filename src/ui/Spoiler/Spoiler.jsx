import clsx from "clsx";
import "./spoiler.scss";

export default ({ className, tagName = "li", data, index }) => {
	const Tag = tagName;
	const { title, text } = data;
	return (
		<Tag className={clsx("spoiler box box--shadow", className, !index && 'spoiler-active')} data-spoiler>
			<button className="spoiler__btn" data-spoiler-title>
				<h3 className="h3 spoiler__title">{title}<span></span></h3>
			</button>
			<div className="spoiler__content" data-spoiler-content>
				<div className="spoiler__wrapper">
					<div className="spoiler__description">
						<p className="spoiler__text">
							{text}
						</p>
					</div>

				</div>
			</div>
		</Tag>
	)
}
