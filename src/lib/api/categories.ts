import { URL } from "@/constants";
import { unstable_noStore as noStore } from "next/cache";

// Fetches all categories
export async function fetchCategories(
	search?: string
): Promise<ServerResponse<CategoriesResponse>> {
	noStore();
	try {
		const query = new URLSearchParams();
		search && query.append("search", search);

		const res = await fetch(`${URL.CATEGORIES}?${query.toString()}`);
		if (!res.ok) {
			throw new Error(`HTTP error! status: ${res.status} ${res.statusText}`);
		}
		return await res.json();
	} catch (e) {
		console.error(e);
		throw e;
	}
}

// Defines parameters for category search
interface IFetchCategoryParams {
	id: string;
	page?: number;
	limit?: number;
}

// ? There might be a problem with endpoint params
// Fetches a single category by ID
export async function fetchCategory(
	params: IFetchCategoryParams
): Promise<any> {
	noStore();
	try {
		const query = new URLSearchParams();
		params.page && query.append("page", params.page.toString());
		params.limit && query.append("limit", params.limit.toString());

		const res = await fetch(
			`${URL.CATEGORIES}/${params.id}?${query.toString()}`
		);
		if (!res.ok) {
			throw new Error(`HTTP error! status: ${res.status} ${res.statusText}`);
		}
		return await res.json();
	} catch (e) {
		console.error(e);
		throw e;
	}
}
