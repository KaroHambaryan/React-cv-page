import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app.scss';
import Layout from "../components/layout/Layout";
import Home from "../components/pages/Home";
import Page404 from "../components/pages/404";

function App() {
  return (
    <Router>
			<div>
				<Routes>
					<Route path="/" element={<Layout />} >
						<Route index element={<Home/>} />
						<Route path="*" element={<Page404 />} />
					</Route>
				</Routes>
			</div>
		</Router>
  );
}

export default App;
