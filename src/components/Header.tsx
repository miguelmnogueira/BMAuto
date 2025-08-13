import Navbar from "./Navbar";

const Header = () => {
	return (
		<header className="w-full h-20 bg-background  border-b-1 border-border/40">
			<div className="container mx-auto flex md:justify-between justify-center items-center h-full max-md:px-4 max-lg:px-8 px-container">
				<div>
					<img src="/image.png" alt="" className="h-14" />
				</div>
				<Navbar />
			</div>
		</header>
	);
};

export default Header;
