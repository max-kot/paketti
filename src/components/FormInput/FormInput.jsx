import clsx from "clsx";
import "./form-input.scss";

export default ({ className, data }) => {
	const { id, label, type = 'text', req = false, hint, isInput = true, placeholder } = data;
	return (
		<div className={clsx("form-input", className)}>
			{label && <label className="form-input__label" htmlFor={id}>{label} {req && <span className="red">*</span>}</label>}
			<div className="form-input__input-box">
				{isInput
					? <input className="form-input__input" type={type} required={req} name={id} id={id} placeholder={placeholder} />
					: <textarea className="form-input__input form-input__textarea" required={req} name={id} id={id} placeholder={placeholder}></textarea>}
				{hint && <span className="form-input__hint">{hint}</span>}
			</div>
		</div>
	)
}
