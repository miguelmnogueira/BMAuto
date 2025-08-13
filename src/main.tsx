import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/home/Home";
import { ThemeProvider } from "./components/ThemeProvider";
import Header from "./components/Header";
import Products from "./pages/products/Products";
import Footer from "./components/Footer";

createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
			<Header />
			<div className="container mx-auto md:px-container px-4">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/produtos/pneumatica" element={<Products />} />
				</Routes>
			</div>
			<Footer />
		</ThemeProvider>
	</BrowserRouter>
);
