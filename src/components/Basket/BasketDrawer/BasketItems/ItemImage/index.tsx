import { unstable_noStore } from "next/cache";
import Image from "next/image";
import { useEffect, useState } from "react";

const ItemImage = (): JSX.Element => {
	const [src, setSrc] = useState<string>("");
	useEffect(() => {
		fetch("https://dog.ceo/api/breeds/image/random")
			.then((res) => res.json())
			.then((data) => setSrc(data.message));
	}, []);

	return (
		<Image
			src={src}
			alt="dog"
			width={80}
			height={105}
			style={{
				display: "block",
				width: "100%",
				objectFit: "cover",
				borderRadius: 3,
			}}
		></Image>
	);
};

export default ItemImage;
