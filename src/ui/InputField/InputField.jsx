import clsx from "clsx";
import "./input-field.scss";

export default ({ className, type = "text", tagName = "input", id, value, placeholder, label, isRequired, ...props }) => {
	return (
		<div className={clsx("input-field", className)}>
			{label && <label className="input-field__label" htmlFor={id}>{label}</label>}
			{type === 'textarea' ? <textarea className="input-field__input input-field__textarea" placeholder={placeholder} id={id} {...props} required={isRequired}>{value}</textarea> : <input className="input-field__input" value={value} placeholder={placeholder} type={type} id={id} required={isRequired} {...props} />}
		</div>
	)
}
