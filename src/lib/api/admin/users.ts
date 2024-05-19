import { URL } from "@/constants";
import { getTokens } from "@/lib/utils";
import { unstable_noStore as noStore } from "next/cache";
import { refreshTokens } from "@/lib/api/auth";

// GET CUSTOMERS

// Defines parameters for customers search
interface IFetchCustomersParams {
	page?: number;
	limit?: number;
}

// Fetches all customers based on search string
export async function fetchCustomers(
	params: IFetchCustomersParams
): Promise<ServerResponse<CustomersResponse>> {
	noStore();
	try {
		const query = new URLSearchParams();
		params.page && query.append("page", params.page.toString());
		params.limit && query.append("limit", params.limit.toString());

		const { access_token, refresh_token } = getTokens();

		const res = await fetch(`${URL.ADMIN_USERS}?${query.toString()}`, {
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
		});
		if (!res.ok) {
			if (res.status === 401) {
				const newTokens = await refreshTokens();
				const res = await fetch(`${URL.ADMIN_USERS}?${query.toString()}`, {
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

// GET CUSTOMER

// Fetches all products based on search string
export async function fetchCustomer(
	id: string
): Promise<ServerResponse<CustomerResponse>> {
	noStore();
	try {
		const { access_token, refresh_token } = getTokens();

		const res = await fetch(`${URL.ADMIN_USERS}/${id}`, {
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
		});
		if (!res.ok) {
			if (res.status === 401) {
				const newTokens = await refreshTokens();
				const res = await fetch(`${URL.ADMIN_USERS}/${id}`, {
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
