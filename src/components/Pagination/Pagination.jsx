import "./pagination.scss";

export default () => {
	return (
		<nav className="woocommerce-pagination pagination">
			<ul className="page-numbers">
				<li>
					<a className="prev page-numbers" href="http://localhost/vasilena/shop/page/9/"><svg width="8" height="17" viewBox="0 0 8 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M6.5 16.4619L0.939141 8.75086C0.678964 8.39008 0.688363 7.90081 0.962207 7.55029L6.5 0.461914" stroke="currentColor" strokeWidth="1.5"></path></svg></a>
				</li>
				<li>
					<a className="page-numbers" href="http://localhost/vasilena/shop/page/1/">1</a>
				</li>
				<li>
					<span className="page-numbers dots">…</span>
				</li>
				<li>
					<a className="page-numbers" href="http://localhost/vasilena/shop/page/9/">9</a>
				</li>
				<li>
					<span aria-current="page" className="page-numbers current">10</span>
				</li>
				<li>
					<a className="page-numbers" href="http://localhost/vasilena/shop/page/11/">11</a>
				</li>
				<li>
					<span className="page-numbers dots">…</span>
				</li>
				<li>
					<a className="page-numbers" href="http://localhost/vasilena/shop/page/22/">22</a>
				</li>
				<li>
					<a className="next page-numbers" href="http://localhost/vasilena/shop/page/11/"><svg width="8" height="17" viewBox="0 0 8 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.608398 0.438477L6.16926 8.14953C6.42944 8.51031 6.42004 8.99958 6.14619 9.3501L0.608398 16.4385" stroke="currentColor" strokeWidth="1.5"></path></svg></a>
				</li>
			</ul>
		</nav>
	)
}
