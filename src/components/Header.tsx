import Navbar from "./Navbar";

const Header = () => {
	return (
		<header className="w-full h-20 bg-background flex justify-between items-center px-[10%] border-b-1 border-border/40">
			<div>
				<img src="image.png" alt="" className="h-48" />
			</div>
			<Navbar />
		</header>
	);
};

export default Header;
