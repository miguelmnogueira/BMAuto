import Navbar from "./Navbar";

const Header = () => {
	return (
		<header className="w-full h-20 bg-background  border-b-1 border-border/40">
			<div className="container mx-auto flex justify-between items-center h-full px-container">
				<div>
					<img src="/image.png" alt="" className="h-14" />
				</div>
				<Navbar />
			</div>
		</header>
	);
};

export default Header;
