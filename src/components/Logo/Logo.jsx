import clsx from "clsx";
import "./logo.scss";

export default ({ className }) => {
	return (
		<div className={clsx("logo", className)}>
			<a href="#">
				<img src="images/logo.png" alt="Logo" />
			</a>
		</div>
	)
}
