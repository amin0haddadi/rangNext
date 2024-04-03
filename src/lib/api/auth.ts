import { URL } from "@/constants";
import { unstable_noStore as noStore } from "next/cache";
import { getTokens, setTokens } from "../utils";

// Defines parameters for user registration
export interface IRegisterUserParams {
	phoneNumber: string;
	password: string;
}
// Registers a new user with the provided username and password
export async function registerUser(
	data: IRegisterUserParams
): Promise<ServerResponse<UserRegisterResponse>> {
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
			throw new Error(`HTTP error! status: ${res.status} ${res.statusText}`);
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
): Promise<ServerResponse<UserLoginResponse>> {
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
			throw new Error(`HTTP error! status: ${res.status} ${res.statusText}`);
		}
		return await res.json();
	} catch (e) {
		console.error(e);
		throw e;
	}
}

// Fetches the profile of the currently authenticated user
export async function fetchProfile(): Promise<
	any
> {
	// ! Authorization required
	noStore();
	try {
		const { access_token, refresh_token } = getTokens();
		const res = await fetch(URL.PROFILE, {
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
		});
		if (!res.ok) {
			if (res.status === 401) {
				const newTokens = await refreshTokens();
				const res = await fetch(URL.PROFILE, {
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

// Function to logout currently authenticated user
export async function logoutUser() {
	// ! Authorization required
	noStore();
	try {
		const { access_token, refresh_token } = getTokens();
		const res = await fetch(URL.LOGOUT, {
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
		});
		if (!res.ok) {
			if (res.status === 401) {
				const newTokens = await refreshTokens();
				const res = await fetch(URL.LOGOUT, {
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

// Fetches new tokens for currently authenticated user
export async function refreshTokens(): Promise<ServerResponse<TokensResponse>> {
	noStore();
	try {
		const { refresh_token } = getTokens();
		const res = await fetch(URL.REFRESH, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ refresh_token }),
		});
		if (!res.ok) {
			throw new Error(`HTTP error! status: ${res.status} ${res.statusText}`);
		}
		const resBody: ServerResponse<TokensResponse> = await res.json();
		setTokens(resBody.data.tokens);
		return resBody;
	} catch (e) {
		console.error(e);
		throw e;
	}
}

export async function reauthorizeUser(url: string) {
	try {
		const newTokens = await refreshTokens();
		const res = await fetch(url, {
			headers: {
				Authorization: `Bearer ${newTokens.data.tokens.access_token}`,
			},
		});
		if (!res.ok) {
			throw new Error(`HTTP error! status: ${res.status} ${res.statusText}`);
		}
		return await res.json();
	} catch (e) {
		console.error(e);
		throw e;
	}
}
