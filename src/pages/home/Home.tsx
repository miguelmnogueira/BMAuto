import CallToAction from "./_components/CallToAction";
import Features from "./_components/Features";
import Hero from "./_components/Hero";

function Home() {
	return (
		<div className="flex flex-col gap-10 max-sm:gap-30">
			<Hero />
			<section className="min-h-screen flex flex-col items-center justify-center">
				<Features />
				<CallToAction />
			</section>
		</div>
	);
}

export default Home;
