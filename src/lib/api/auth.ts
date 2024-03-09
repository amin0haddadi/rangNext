import { URL } from "@/constants";
import { unstable_noStore as noStore } from "next/cache";
import { getTokens } from "../utils";

// Defines parameters for user registration
export interface IRegisterUserParams {
	phoneNumber: string;
	password: string;
}
// Registers a new user with the provided username and password
export async function registerUser(
	data: IRegisterUserParams
): Promise<ServerResponse<UserResponse>> {
	noStore();
	try {
		const res = await fetch(URL.REGISTER, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		if (!res.ok) {
			throw new Error("HTTP error! status: " + res.status);
		}
		return await res.json();
	} catch (e) {
		console.error(e);
		throw e;
	}
}

// Defines parameters for user login
export interface ILoginUserParams extends IRegisterUserParams {}
// Logs in a user with the provided username and password
export async function loginUser(
	data: ILoginUserParams
): Promise<ServerResponse<TokensResponse>> {
	noStore();
	try {
		const res = await fetch(URL.LOGIN, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		if (!res.ok) {
			throw new Error("HTTP error! status: " + res.status);
		}
		return await res.json();
	} catch (e) {
		console.error(e);
		throw e;
	}
}

// Fetches the profile of the currently authenticated user
export async function fetchProfile(): Promise<ServerResponse<UserResponse>> {
	// ! Authorization required
	noStore();
	try {
		const { access_token } = await getTokens();
		const res = await fetch(URL.PROFILE, {
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
		});
		if (!res.ok) {
			throw new Error("HTTP error! status: " + res.status);
		}
		return await res.json();
	} catch (e) {
		console.error(e);
		throw e;
	}
}

// Function to logout currently authenticated user
export async function logoutUser() {
	// ! Authorization required
	noStore();
	try {
		const { access_token } = await getTokens();
		const res = await fetch(URL.LOGOUT, {
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
		});
		if (!res.ok) {
			throw new Error("HTTP error! status: " + res.status);
		}
		return await res.json();
	} catch (e) {
		console.error(e);
		throw e;
	}
}

// Fetches new tokens for currently authenticated user
export async function refreshTokens(): Promise<ServerResponse<TokensResponse>> {
	noStore();
	try {
		const { refresh_token } = await getTokens();
		const res = await fetch(URL.REFRESH, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ refresh_token: refresh_token }),
		});
		if (!res.ok) {
			throw new Error("HTTP error! status: " + res.status);
		}
		return await res.json();
	} catch (e) {
		console.error(e);
		throw e;
	}
}
