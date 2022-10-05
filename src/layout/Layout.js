import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/appHeader/Header";
import Spinner from "../components/spinner/Spinner";
import Footer from "../components/appFooter/Footer";

import "../style/global-styles.scss";

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