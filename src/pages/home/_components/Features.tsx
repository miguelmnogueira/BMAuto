import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import {
	BellIcon,
	BicepsFlexed,
	CalendarIcon,
	FileTextIcon,
	GlobeIcon,
} from "lucide-react";
import { Element } from "react-scroll";

const features = [
	{
		Icon: GlobeIcon,
		name: "Integração de Sistemas",
		description:
			"Soluções completas para integração de equipamentos industriais e sistemas pneumáticos.",
		href: "/produtos/pneumatica ",
		cta: "Saiba mais",
		background: <img className="absolute -right-20 -top-20 opacity-60" />,
		className: "lg:row-start-2 lg:row-end-4 lg:col-start-1 lg:col-end-2",
	},
	{
		Icon: FileTextIcon,
		name: "Projetos Personalizados",
		description:
			"Desenvolvimento de projetos sob medida para automação e pneumática industrial.",
		href: "/produtos/pneumatica ",
		cta: "Saiba mais",
		background: <img className="absolute -right-20 -top-20 opacity-60" />,
		className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2",
	},
	{
		Icon: CalendarIcon,
		name: "Manutenção Preventiva",
		description:
			"Planos de manutenção para garantir o funcionamento contínuo dos seus sistemas.",
		href: "/produtos/pneumatica ",
		cta: "Saiba mais",
		background: <img className="absolute -right-20 -top-20 opacity-60" />,
		className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3",
	},
	{
		Icon: BellIcon,
		name: "Monitoramento Remoto",
		description:
			"Acompanhe o desempenho dos equipamentos em tempo real, de qualquer lugar.",
		href: "/produtos/pneumatica ",
		cta: "Saiba mais",
		background: <img className="absolute -right-20 -top-20 opacity-60" />,
		className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-4",
	},
	{
		Icon: GlobeIcon,
		name: "Eficiência Energética",
		description:
			"Soluções para otimizar o consumo de energia em processos industriais.",
		href: "/produtos/pneumatica ",
		cta: "Saiba mais",
		background: <img className="absolute -right-20 -top-20 opacity-60" />,
		className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-1",
	},
	{
		Icon: BicepsFlexed,
		name: "Treinamentos Especializados",
		description:
			"Capacitação técnica para equipes operacionais em automação e pneumática.",
		href: "/produtos/pneumatica ",
		cta: "Saiba mais",
		background: <img className="absolute -right-20 -top-20 opacity-60" />,
		className: "lg:col-start-2 lg:col-end-2 lg:row-start-3 lg:row-end-3",
	},
];
function Features() {
	return (
		<Element name="features">
			<BentoGrid className="lg:grid-rows-3">
				{features.map((feature) => (
					<BentoCard key={feature.name} {...feature} />
				))}
			</BentoGrid>
		</Element>
	);
}

export default Features;
