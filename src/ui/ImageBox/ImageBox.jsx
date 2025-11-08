import "./image-box.scss";
import clsx from "clsx";
import Image from "../Image/Image";

export default ({ className, src, alt, children, srcset, ...props }) => {
	return (
		<figure className={clsx("image-box", className)} {...props}>
			{/*<Image tagName="img"/>*/}
			<img src={src} alt={alt} srcSet={srcset}/>
			{children}
		</figure>
	)
}
