import { URL } from "@/constants";
import { unstable_noStore as noStore } from "next/cache";
// ! ====================
// ! NOT FUNCTIONAL YET
// todo : create getToken function
// ! ====================
// Fetches the current user's cart
export async function fetchCart(): Promise<ServerResponse<CartsResponse>> {
	// ! Authorization required
	noStore();
	try {
		// const token = await getAuthToken();
		const res = await fetch(URL.CARTS, {
			headers: {
				// Authorization: `Bearer ${token}`,
			},
		});
		if (!res.ok) {
			throw new Error("HTTP error! status:" + res.status);
		}
		return await res.json();
	} catch (e) {
		console.error(e);
		throw e;
	}
}

// Adds or updates a cart item
interface ISetCartParams {
	id?: string;
	productId: string;
	quantity: number;
}

export async function setCartItem({
	id = "",
	productId,
	quantity,
}: ISetCartParams) {
	// ! Authorization required
	try {
		// const token = await getAuthToken();
		const data = { productId, quantity };
		const res = await fetch(URL.CARTS + (id ? `/${id}` : ""), {
			method: id ? "PATCH" : "POST",
			headers: {
				"Content-Type": "application/json",
				// Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(data),
		});
		if (!res.ok) {
			throw new Error("HTTP error! status:" + res.status);
		}
		return await res.json();
	} catch (e) {
		console.error(e);
		throw e;
	}
}

// Deletes a cart item by ID
export async function deleteCartItem(id: string) {
	// ! Authorization required
	try {
		// const token = await getAuthToken();
		const res = await fetch(URL.CARTS + `/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				// Authorization: `Bearer ${token}`,
			},
		});
		if (!res.ok) {
			throw new Error("HTTP error! status:" + res.status);
		}
		return await res.json();
	} catch (e) {
		console.error(e);
		throw e;
	}
}
