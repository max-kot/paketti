import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import "./hero-page.scss";

export default ({ title, breadcrumbs }) => {
	return (
		<section className="section hero-page" id="hero-page">
			<div className="container hero-page__container">
				<Breadcrumbs list={breadcrumbs} />
				<h1 className="title-2 hero-page__title">{title}</h1>
			</div>
		</section>
	)
}
