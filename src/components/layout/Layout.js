import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Header from "../header/Header.jsx";
import Spinner from "../spinner/Spinner";
import Footer from "../footer/Footer";

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