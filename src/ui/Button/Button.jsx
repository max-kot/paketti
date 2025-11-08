import "./button.scss";
import clsx from "clsx";

export default ({href, type = "button", children, className, ...props}) => {
	const TagName = href ? "a" : "button";
	const typeAttr = href ? {href} : {type};
	return (
		<TagName className={clsx('btn', className)} {...typeAttr} {...props}>
			<span>{children}</span>
		</TagName>
	)
}