import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { BellIcon, CalendarIcon, FileTextIcon, GlobeIcon } from "lucide-react";
import { Element } from "react-scroll";

const features = [
	// {
	// 	Icon: FileTextIcon,
	// 	name: "Save your files",
	// 	description: "We automatically save your files as you type.",
	// 	href: "/",
	// 	cta: "Learn more",
	// 	background: <img className="absolute -right-20 -top-20 opacity-60" />,
	// 	className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
	// },
	// {
	// 	Icon: BellIcon,
	// 	name: "Full text search",
	// 	description: "Search through all your files in one place.",
	// 	href: "/",
	// 	cta: "Learn more",
	// 	background: <img className="absolute -right-20 -top-20 opacity-60" />,
	// 	className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
	// },
	// {
	// 	Icon: GlobeIcon,
	// 	name: "Multilingual",
	// 	description: "Supports 100+ languages and counting.",
	// 	href: "/",
	// 	cta: "Learn more",
	// 	background: <img className="absolute -right-20 -top-20 opacity-60" />,
	// 	className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
	// },
	// {
	// 	Icon: CalendarIcon,
	// 	name: "Calendar",
	// 	description: "Use the calendar to filter your files by date.",
	// 	href: "/",
	// 	cta: "Learn more",
	// 	background: <img className="absolute -right-20 -top-20 opacity-60" />,
	// 	className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
	// },
	// {
	// 	Icon: BellIcon,
	// 	name: "Notifications",
	// 	description:
	// 		"Get notified when someone shares a file or mentions you in a comment.",
	// 	href: "/",
	// 	cta: "Learn more",
	// 	background: <img className="absolute -right-20 -top-20 opacity-60" />,
	// 	className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
	// },
	// me faça uma lista de features como a de cima, mas para um site de uma empresa de automação industrial e pneumatica
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
		className: "lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2",
	},
	{
		Icon: CalendarIcon,
		name: "Manutenção Preventiva",
		description:
			"Planos de manutenção para garantir o funcionamento contínuo dos seus sistemas.",
		href: "/produtos/pneumatica ",
		cta: "Saiba mais",
		background: <img className="absolute -right-20 -top-20 opacity-60" />,
		className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-4",
	},
	{
		Icon: BellIcon,
		name: "Monitoramento Remoto",
		description:
			"Acompanhe o desempenho dos equipamentos em tempo real, de qualquer lugar.",
		href: "/produtos/pneumatica ",
		cta: "Saiba mais",
		background: <img className="absolute -right-20 -top-20 opacity-60" />,
		className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3",
	},
	{
		Icon: GlobeIcon,
		name: "Eficiência Energética",
		description:
			"Soluções para otimizar o consumo de energia em processos industriais.",
		href: "/produtos/pneumatica ",
		cta: "Saiba mais",
		background: <img className="absolute -right-20 -top-20 opacity-60" />,
		className: "lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-4",
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
