import { BlurFade } from "@/components/ui/blurfade";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-scroll";

function Hero() {
	return (
		<div className="flex  mt-28 h-[50vh] w-full relative">
			<div className="flex flex-col gap-8 justify-center items-start w-full">
				<BlurFade delay={0.1} duration={0.8} blur="8px">
					<h2 className="text-6xl font font-semibold max-w-[55%]">
						Empresa especializada em Automação Indústrial
						{/* make text content shorter */}
					</h2>
				</BlurFade>
				<BlurFade delay={0.3} duration={0.8} blur="8px">
					<p className="text-xl max-w-[65%] text-muted-foreground">
						{/* pequena descricao */}
						Oferecemos soluções personalizadas para otimizar
						processos e aumentar a eficiência de sua indústria.
					</p>
				</BlurFade>
				<BlurFade delay={0.5} duration={0.8} blur="8px">
					<div className="flex gap-4 items-center">
						<Button variant={"hero"}>
							Veja nossos produtos
							<ArrowRight strokeWidth={4} />
						</Button>
						<Link
							to="features"
							smooth={true}
							duration={500}
							offset={-250}
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
