import { BlurFade } from "@/components/ui/blurfade";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-scroll";
import { Link as LinkRouter } from "react-router";

function Hero() {
	return (
		<div className="flex mb-28 min-h-[75vh] w-full relative">
			<div className="flex flex-col md:gap-8 gap-4 justify-center items-center md:items-start w-full">
				<BlurFade delay={0.1} duration={0.8} blur="8px">
					<h2 className="text-5xl md:text-6xl font font-semibold md:max-w-[55%] md:text-left text-center">
						Empresa especializada em Automação Indústrial
					</h2>
				</BlurFade>
				<BlurFade delay={0.3} duration={0.8} blur="8px">
					<p className="md:text-xl md:text-left md:max-w-[65%] text-center text-muted-foreground text-lg">
						Oferecemos soluções personalizadas para otimizar
						processos e aumentar a eficiência de sua indústria.
					</p>
				</BlurFade>
				<BlurFade delay={0.5} duration={0.8} blur="8px">
					<div className="flex max-md:flex-col gap-4 md:mt-0 mt-20 items-center">
						<LinkRouter to="produtos/pneumatica">
							<Button variant={"hero"}>
								Veja nossos produtos
								<ArrowRight strokeWidth={4} />
							</Button>
						</LinkRouter>
						<Link
							to="features"
							smooth={true}
							duration={500}
							offset={-200}
						>
							<Button variant={"hero_outline"}>Saiba Mais</Button>
						</Link>
					</div>
				</BlurFade>
			</div>
			<div>
				<img src="" alt="" />
			</div>
		</div>
	);
}

export default Hero;
