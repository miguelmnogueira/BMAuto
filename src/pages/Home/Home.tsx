import Features from "./_components/Features";
import Hero from "./_components/Hero";

function Home() {
	return (
		<div className="flex flex-col gap-10">
			<Hero />
			<section className="h-screen flex items-center justify-center">
				<Features />
			</section>
		</div>
	);
}

export default Home;
