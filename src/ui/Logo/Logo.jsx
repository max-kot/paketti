import "./Logo.scss";
import clsx from "clsx"

export default ({
	className, src = "images/logo.svg", alt, ...props }) => {
	return (
		<a className={clsx("logo", className)} href="./" {...props}>
			<img src={src} alt={alt}/>
		</a>
	)
}