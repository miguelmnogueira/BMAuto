import { Cta4 } from "@/components/cta-4";
import { BlurFade } from "@/components/ui/blurfade";

function CallToAction() {
	return (
		<BlurFade inView duration={0.8} delay={0.4}>
			<Cta4
				title="Comece seu projeto"
				description="Descubra como nossas soluções de automação industrial e pneumática podem transformar sua produção."
				buttonText="Comece já"
				buttonUrl="/produtos/pneumatica"
				items={[
					"Suporte 24/7",
					"Especialização Técnica",
					"Inovação Contínua",
					"Internacionalização",
					"Distribuição em todo o mundo",
					"Soluções Personalizadas",
				]}
			/>
		</BlurFade>
	);
}

export default CallToAction;
