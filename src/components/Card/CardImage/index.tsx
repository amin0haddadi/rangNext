import Image from "next/image";

interface ICardImageProps {
	product: ProductBase;
}

const CardImage: React.FC<ICardImageProps> = ({ product }) => {
	return (
		<>
			{product.images[0] && (
				<Image
					src={
						product.images[0].startsWith("/up")
							? `http://localhost:3550${product.images[0]}`
							: product.images[0]
					}
					alt={""}
					width={400}
					height={400}
					style={{
						display: "block",
						width: "100%",
						height: "300px",
						objectFit: "cover",
					}}
				/>
			)}
		</>
	);
};

export default CardImage;
