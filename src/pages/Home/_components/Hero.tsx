import { BlurFade } from "@/components/ui/blurfade";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function Hero() {
	return (
		<div className="flex  mt-28 h-[40vh] w-full relative">
			<div className="flex flex-col gap-8 justify-center items-start w-full">
				<BlurFade delay={0.1} duration={0.8} blur="8px">
					<h2 className="text-6xl font font-medium max-w-[55%]">
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
							<ArrowRight className="" />
						</Button>
						<Button variant={"hero_outline"}>Saiba Mais</Button>
					</div>
				</BlurFade>
			</div>
			<div>
				<img
					src=""
					className="scale-x-[-1] h-full object-cover"
					alt=""
				/>
			</div>
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_20%,var(--muted),transparent_20%)] w-[80%] blur-3xl -z-1" />
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,var(--muted),transparent_10%)] w-[50%] blur-3xl -z-1" />
			<div className="absolute right-0 top-0 bg-[radial-gradient(ellipse_at_50%_70%,var(--muted),transparent_70%)] blur-3xl h-[300px] w-[900px] -z-1" />
		</div>
	);
}

export default Hero;
