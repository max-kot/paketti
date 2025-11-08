import clsx from "clsx";

export default ({ tagName = "section", className = "section", id = className, sectionClass = "section", containerClass, children, hasContainer = true, ...props }) => {
	const Tag = tagName;
	return (
		<Tag className={clsx(sectionClass, className)} id={id} {...props}>
			{hasContainer ? (<div className={clsx("container", `${className}__container`, containerClass)}>
				{children}
			</div>) : (children)}
		</Tag>
	)
}