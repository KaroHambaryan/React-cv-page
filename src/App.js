import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import  "./App.css";

import Layout from "./components/layout/Layout.jsx";
import Home from "./components/pages/Home.jsx";
import MyPhage from './components/pages/MyPhage.jsx';
import Page404 from "./components/pages/404.jsx";


function App() {
  return (
    <Router>
				<Routes>
					<Route path="/" element={<Layout />} >
						<Route index element={<Home/>} />
						<Route path='myphage' element={<MyPhage/>} />
						<Route path="*" element={<Page404 />} />
					</Route>
				</Routes>
		</Router>
  );
}

export default App;
