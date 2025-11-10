import "./breadcrumbs.scss";

export default ({ list }) => {
	return (
		<nav className="breadcrumbs">
			{list.slice(0, list.length - 1).map(item => <><a href="#">{item}</a><span>»</span></>)}
			{list[list.length - 1]}
		</nav>
	)
}
