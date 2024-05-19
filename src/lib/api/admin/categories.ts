import { URL } from "@/constants";
import { unstable_noStore as noStore } from "next/cache";
import { refreshTokens } from "@/lib/api/auth";
import { getTokens } from "@/lib/utils";

// Post Categories
export interface IPostCategoryParams {
	name: string;
}

export async function postCategory(
	data: IPostCategoryParams
): Promise<ServerResponse<null>> {
	// ! Authorization required
	noStore();
	try {
		const { access_token, refresh_token } = getTokens();
		const res = await fetch(URL.CATEGORIES, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${access_token}`,
			},
			body: JSON.stringify(data),
		});
		if (!res.ok) {
			if (res.status === 401) {
				const newTokens = await refreshTokens();
				const res = await fetch(URL.CATEGORIES, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${newTokens.data.tokens.access_token}`,
					},
					body: JSON.stringify(data),
				});
				if (!res.ok) {
					throw new Error(
						`HTTP error! status: ${res.status} ${res.statusText}`
					);
				}
				return await res.json();
			}
			throw new Error(`HTTP error! status: ${res.status} ${res.statusText}`);
		}
		return await res.json();
	} catch (e) {
		console.error(e);
		throw e;
	}
}

// Get Categories

interface IFetchCategoriesParams {
	search?: string;
}

// Fetches all categories based on search string
export async function fetchAdminCategories(
	params: IFetchCategoriesParams
): Promise<ServerResponse<CategoriesResponse>> {
	noStore();
	try {
		const query = new URLSearchParams();
		params.search && query.append("search", params.search);

		const { access_token } = getTokens();

		const res = await fetch(`${URL.ADMIN_CATEGORIES}?${query.toString()}`, {
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
		});
		if (!res.ok) {
			if (res.status === 401) {
				const newTokens = await refreshTokens();
				const res = await fetch(`${URL.ADMIN_CATEGORIES}?${query.toString()}`, {
					headers: {
						Authorization: `Bearer ${newTokens.data.tokens.access_token}`,
					},
				});
				if (!res.ok) {
					throw new Error(
						`HTTP error! status: ${res.status} ${res.statusText}`
					);
				}
				return await res.json();
			}
			throw new Error(`HTTP error! status: ${res.status} ${res.statusText}`);
		}
		return await res.json();
	} catch (e) {
		console.error(e);
		throw e;
	}
}

// Get Category

// Defines parameters for category search
interface IFetchCategoryParams {
	id: string;
	page?: number;
	limit?: number;
}

// Fetches a single category by ID
export async function fetchAdminCategory(
	params: IFetchCategoryParams
): Promise<ServerResponse<CategoryResponse>> {
	noStore();
	try {
		const query = new URLSearchParams();
		params.page && query.append("page", params.page.toString());
		params.limit && query.append("limit", params.limit.toString());

		const { access_token } = getTokens();

		const res = await fetch(
			`${URL.ADMIN_CATEGORIES}/${params.id}?${query.toString()}`,
			{
				headers: {
					Authorization: `Bearer ${access_token}`,
				},
			}
		);
		if (!res.ok) {
			if (res.status === 401) {
				const newTokens = await refreshTokens();
				const res = await fetch(
					`${URL.ADMIN_CATEGORIES}/${params.id}?${query.toString()}`,
					{
						headers: {
							Authorization: `Bearer ${newTokens.data.tokens.access_token}`,
						},
					}
				);
				if (!res.ok) {
					throw new Error(
						`HTTP error! status: ${res.status} ${res.statusText}`
					);
				}
				return await res.json();
			}
			throw new Error(`HTTP error! status: ${res.status} ${res.statusText}`);
		}
		return await res.json();
	} catch (e) {
		console.error(e);
		throw e;
	}
}

// Patch Categories

export interface IChangeCategoryParams {
	name: string;
	id: string;
}

export async function changeCategory(
	data: IChangeCategoryParams
): Promise<ServerResponse<null>> {
	// ! Authorization required
	noStore();
	try {
		const { access_token, refresh_token } = getTokens();
		const res = await fetch(`${URL.ADMIN_CATEGORIES}/${data.id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${access_token}`,
			},
			body: JSON.stringify({ name: data.name }),
		});

		if (!res.ok) {
			if (res.status === 401) {
				const newTokens = await refreshTokens();
				const res = await fetch(`${URL.ADMIN_CATEGORIES}/${data.id}`, {
					method: "PATCH",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${newTokens.data.tokens.access_token}`,
					},
					body: JSON.stringify({ name: data.name }),
				});
				if (!res.ok) {
					throw new Error(
						`HTTP error! status: ${res.status} ${res.statusText}`
					);
				}
				return await res.json();
			}
			throw new Error(`HTTP error! status: ${res.status} ${res.statusText}`);
		}
		return await res.json();
	} catch (e) {
		console.error(e);
		throw e;
	}
}

// Delete Categories

export async function deleteCategory(
	id: string
): Promise<ServerResponse<null>> {
	// ! Authorization required
	noStore();
	try {
		const { access_token, refresh_token } = getTokens();
		const res = await fetch(`${URL.ADMIN_CATEGORIES}/${id}`, {
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
		});

		if (!res.ok) {
			if (res.status === 401) {
				const newTokens = await refreshTokens();
				const res = await fetch(`${URL.ADMIN_CATEGORIES}/${id}`, {
					method: "DELETE",
					headers: {
						Authorization: `Bearer ${newTokens.data.tokens.access_token}`,
					},
				});
				if (!res.ok) {
					throw new Error(
						`HTTP error! status: ${res.status} ${res.statusText}`
					);
				}
				return await res.json();
			}
			throw new Error(`HTTP error! status: ${res.status} ${res.statusText}`);
		}
		return await res.json();
	} catch (e) {
		console.error(e);
		throw e;
	}
}
