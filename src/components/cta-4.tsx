import { ArrowBigUpDash, ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Link } from "react-router";

interface Cta4Props {
	title?: string;
	description?: string;
	buttonText?: string;
	buttonUrl?: string;
	items?: string[];
}

const defaultItems = [
	"Easy Integration",
	"24/7 Support",
	"Customizable Design",
	"Scalable Performance",
	"Hundreds of Blocks",
];

export const Cta4 = ({
	title = "Call to Action",
	description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto illo praesentium nisi, accusantium quae.",
	buttonText = "Get Started",
	buttonUrl = "https://shadcnblocks.com",
	items = defaultItems,
}: Cta4Props) => {
	return (
		<section className="py-32">
			<div className="container mx-auto">
				<div className="flex justify-center ">
					<div className="max-w-5xl">
						<div className="flex flex-col items-start justify-between gap-8 rounded-lg  px-6 py-10 md:flex-row lg:px-20 lg:py-16 bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.05),0_2px_4px_rgba(0,0,0,.05),0_0px_35px_rgba(0,0,0,.1)] hover:[box-shadow:0_0_0_1px_rgba(0,0,0,.05),0_4px_8px_rgba(0,0,0,.1),0_0px_35px_rgba(0,0,0,.1)] transition-all">
							<div className="md:w-1/2">
								<div className="flex text-2xl gap-2">
									<h4 className="mb-1  font-bold md:text-3xl">
										{title}
									</h4>
									<ArrowBigUpDash size={"1.5em"} />
								</div>
								<p className="text-muted-foreground">
									{description}
								</p>
								<Button
									className="mt-6"
									asChild
									variant={"hero_cta"}
								>
									<Link to={buttonUrl}>
										{buttonText}{" "}
										<ArrowRight className="size-4" />
									</Link>
								</Button>
							</div>
							<div className="md:w-1/3">
								<ul className="flex flex-col space-y-2 text-sm font-medium">
									{items.map((item, idx) => (
										<li
											className="flex items-center"
											key={idx}
										>
											<Check className="mr-4 size-4 flex-shrink-0" />
											{item}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
