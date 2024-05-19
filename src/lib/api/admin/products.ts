import { URL } from "@/constants";
import { unstable_noStore as noStore } from "next/cache";
import { getTokens, setTokens } from "@/lib/utils";
import { refreshTokens } from "../auth";

// POST PRODUCTS

export async function postProduct(data: any): Promise<ServerResponse<null>> {
	// ! Authorization required
	noStore();
	try {
		const { access_token, refresh_token } = getTokens();
		const res = await fetch(URL.PRODUCTS, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
			body: data,
		});
		if (!res.ok) {
			if (res.status === 401) {
				const newTokens = await refreshTokens();
				const res = await fetch(URL.PRODUCTS, {
					method: "POST",
					headers: {
						Authorization: `Bearer ${newTokens.data.tokens.access_token}`,
					},
					body: data,
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

// GET PRODUCTS

// Defines parameters for products search
interface IFetchAdminProductsParams {
	search?: string;
	page?: number;
	limit?: number;
}

// Fetches all products based on search string
export async function fetchAdminProducts(
	params: IFetchAdminProductsParams
): Promise<any> {
	noStore();
	try {
		const query = new URLSearchParams();
		params.search && query.append("search", params.search);
		params.page && query.append("page", params.page.toString());
		params.limit && query.append("limit", params.limit.toString());

		const { access_token, refresh_token } = getTokens();

		const res = await fetch(`${URL.PRODUCTS}?${query.toString()}`, {
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
		});
		if (!res.ok) {
			if (res.status === 401) {
				const newTokens = await refreshTokens();
				const res = await fetch(URL.PRODUCTS, {
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

// GET SINGLE PRODUCT

export async function fetchAdminProduct(
	id: string
): Promise<ServerResponse<ProductResponse>> {
	noStore();
	try {
		const { access_token, refresh_token } = getTokens();

		const res = await fetch(`${URL.ADMIN_PRODUCTS}/${id}`, {
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
		});
		if (!res.ok) {
			if (res.status === 401) {
				const newTokens = await refreshTokens();
				const res = await fetch(`${URL.ADMIN_PRODUCTS}/${id}`, {
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

// PATCH PRODUCT

type PatchProductParams = {
	id: string;
	data: {
		name: string;
		price: number;
		quantity: number;
		categoryId: string;
		description: string;
	};
};

export async function patchProduct(
	params: PatchProductParams
): Promise<ServerResponse<null>> {
	// ! Authorization required
	noStore();
	try {
		const { access_token, refresh_token } = getTokens();
		const res = await fetch(`${URL.ADMIN_PRODUCTS}/${params.id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${access_token}`,
			},
			body: JSON.stringify(params.data),
		});
		if (!res.ok) {
			if (res.status === 401) {
				const newTokens = await refreshTokens();
				const res = await fetch(`${URL.ADMIN_PRODUCTS}/${params.id}`, {
					method: "PATCH",
					headers: {
						Authorization: `Bearer ${newTokens.data.tokens.access_token}`,
					},
					body: JSON.stringify(params.data),
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

// DELETE PRODUCT

export async function deleteProduct(id: string): Promise<ServerResponse<null>> {
	// ! Authorization required
	noStore();
	try {
		const { access_token, refresh_token } = getTokens();

		const res = await fetch(`${URL.ADMIN_PRODUCTS}/${id}`, {
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
		});
		if (!res.ok) {
			if (res.status === 401) {
				const newTokens = await refreshTokens();
				const res = await fetch(`${URL.ADMIN_PRODUCTS}/${id}`, {
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

// POST PRODUCT IMAGE

export async function postProductImage(
	id: string,
	data: FormData
): Promise<ServerResponse<null>> {
	// ! Authorization required
	noStore();
	try {
		const { access_token, refresh_token } = getTokens();
		const res = await fetch(`${URL.ADMIN_PRODUCTS}/${id}/image`, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
			body: data,
		});
		if (!res.ok) {
			if (res.status === 401) {
				const newTokens = await refreshTokens();
				const res = await fetch(`${URL.ADMIN_PRODUCTS}/${id}/image`, {
					method: "POST",
					headers: {
						Authorization: `Bearer ${newTokens.data.tokens.access_token}`,
					},
					body: data,
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

// DELETE PRODUCT IMAGE

export async function deleteProductImage(
	productId: string,
	imageId: string
): Promise<ServerResponse<null>> {
	noStore();
	try {
		const { access_token, refresh_token } = getTokens();

		const res = await fetch(
			`${URL.ADMIN_PRODUCTS}/${productId}/image/${imageId}`,
			{
				method: "DELETE",
				headers: {
					Authorization: `Bearer ${access_token}`,
				},
			}
		);
		if (!res.ok) {
			if (res.status === 401) {
				const newTokens = await refreshTokens();
				const res = await fetch(
					`${URL.ADMIN_PRODUCTS}/${productId}/image/${imageId}`,
					{
						method: "DELETE",
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
