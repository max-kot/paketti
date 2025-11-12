import clsx from "clsx";
import "./checkbox.scss";

export default ({ className, data, ...props }) => {
	const { type = "checkbox", name, value, label, isChecked = false, spoiler = false } = data
	return (
		<>
			{spoiler
				? <div className="spoiler" data-spoiler-delivery>
					<label className={clsx("checkbox-custom", className, 'custom-' + type)} data-spoiler-btn>
						<input className="checkbox-custom__input" type={type} name={name} value={value} checked={isChecked} {...props} />
						<span className="checkbox-custom__fake"></span>
						{label && <span className="checkbox-custom__text">{label}</span>}
					</label>
					<div className="spoiler__content" data-spoiler-content>
						{spoiler}
					</div>
				</div>
				: <label className={clsx("checkbox-custom", className, 'custom-' + type)}>
					<input className="checkbox-custom__input" type={type} name={name} value={value} checked={isChecked} {...props} />
					<span className="checkbox-custom__fake"></span>
					{label && <span className="checkbox-custom__text">{label}</span>}
				</label>
			}
		</>
	)
}
