import { Image, Picture } from "minista";
import "./image.scss";

export default ({ tagName = 'picture', src, alt, formats = ['avif', 'webp'], ...props }) => {
	return (
		tagName === 'picture'
			? <Picture src={src} alt={alt} formats={formats} {...props} />
			: <img src={src} alt={alt} {...props} />
	);
}
