const ProductComponent = ({
	title,
	titleLogoSrc,
	imageSrc,
	description,
}: {
	title: string;
	titleLogoSrc?: string;
	imageSrc: string;
	description: string;
}) => {
	return (
		<div className="w-max-md w-full overflow-hidden rounded-xl border border-black/10 gap-3 flex flex-col shadow-sm h-full hover:shadow-lg transition-all">
			<img
				src={imageSrc}
				alt=""
				className="p-1 max-h-55 h-full object-cover rounded-xl"
			/>
			<div className="px-5 pb-6">
				{titleLogoSrc ? (
					<img
						src={titleLogoSrc}
						alt=""
						className="inline-block h-8 ml-2"
					/>
				) : null}
				<h4 className="text-lg font-semibold ">{title} </h4>
				<p className="line-clamp-3">{description}</p>
			</div>
		</div>
	);
};

export default ProductComponent;
