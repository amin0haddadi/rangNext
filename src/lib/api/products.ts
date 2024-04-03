import { URL } from "@/constants";
import { unstable_noStore as noStore } from "next/cache";

// Defines parameters for products search
interface IFetchProductsParams {
	search?: string;
	page?: number;
	limit?: number;
}

// Fetches all products based on search string
export async function fetchProducts(
	params: IFetchProductsParams
): Promise<ServerResponse<ProductsResponse>> {
	noStore();
	try {
		const query = new URLSearchParams();
		params.search && query.append("search", params.search);
		params.page && query.append("page", params.page.toString());
		params.limit && query.append("limit", params.limit.toString());

		const res = await fetch(`${URL.PRODUCTS}?${query.toString()}`);
		if (!res.ok) {
			throw new Error("HTTP error! status:" + res.status);
		}
		return await res.json();
	} catch (e) {
		console.error(e);
		throw e;
	}
}

// Fetches a single product by ID
export async function fetchProduct(
	id: string
): Promise<any> {
	noStore();
	try {
		const res = await fetch(URL.PRODUCTS + `/${id}`);
		if (!res.ok) {
			throw new Error("HTTP error! status:" + res.status);
		}
		return await res.json();
	} catch (e) {
		console.error(e);
		throw e;
	}
}
