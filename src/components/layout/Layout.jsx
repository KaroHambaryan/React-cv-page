import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Header from "../header/Header";
import Spinner from "../spinner/Spinner.jsx";
import Footer from "../footer/Footer.jsx";

const Layout = () => {
	return (
		<>
			<Header />
			<main className="main">
				<Suspense fallback={<Spinner />}>
					<Outlet />
				</Suspense>
			</main>
			<Footer/>
		</>
	);
}

export default Layout;