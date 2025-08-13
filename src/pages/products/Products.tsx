import { BlurFade } from "@/components/ui/blurfade";
import ProductComponent from "./_components/ProductComponent";

const Products = () => {
	const products = [
		{
			title: "Conexões e acessórios",
			imageSrc: "/conections.jpg",
			description:
				"Automáticas, push-in, compressão, conexões funcionais, adaptadores, válvulas de esfera, mangueiras e tubos para fluidos e ar comprimido",
		},
		{
			title: "Engates rápidos",
			imageSrc: "/engates.jpg",
			description:
				"Engates rápidos para mangueiras, conectores rápidos, adaptadores e pistolas de ar",
		},
		{
			title: "Automação",
			imageSrc: "/automation.jpg",
			description:
				"Válvulas, Atuadores Pneumáticos, Cilindros Elétricos e unidades FRL para tratamento de ar comprimido",
		},
		{
			title: "Redes de ar comprimido",
			imageSrc: "/infinity.jpg",
			titleLogoSrc: "/infinity-logo.png",
			description:
				"A linha Infinity para distribuição de ar comprimido, gases inertes e vácuo",
		},
		{
			title: "Válvulas fluidity",
			imageSrc: "/fluidity.jpg",
			titleLogoSrc: "/fluidity-logo.png",
			description:
				"A linha Fluidity para controle e distribuição de fluidos líquidos e gasosos",
		},
	];
	return (
		<div className="grid grid-cols-3 gap-10 mt-12">
			{products.map((product, index) => (
				<BlurFade key={index} delay={0.1 * index + 0.2} duration={0.8}>
					<ProductComponent
						title={product.title}
						imageSrc={product.imageSrc}
						description={product.description}
						titleLogoSrc={product.titleLogoSrc}
					/>
				</BlurFade>
			))}
		</div>
	);
};

export default Products;
