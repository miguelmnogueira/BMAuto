import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/Home/Home";
import { ThemeProvider } from "./components/ThemeProvider";
import Header from "./components/Header";

createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</ThemeProvider>
	</BrowserRouter>
);
