import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Header from "../header/Header";
import Spinner from "../spinner/Spinner";
import Footer from "../footer/Footer";

import "../../style/global-styles.scss";

const Layout = () => {
	return (
		<>
			<Header />
			<main className="container">
				<Suspense fallback={<Spinner />}>
					<Outlet />
				</Suspense>
			</main>
			<Footer/>
		</>
	);
}

export default Layout;