export async function getTokens(): Promise<{
	access_token: string;
	refresh_token: string;
}> {
	const accessToken = localStorage.getItem("access_token");
	const refreshToken = localStorage.getItem("refresh_token");
	if (!accessToken || !refreshToken) {
		throw new Error("Token Not Found! Please Login");
	}
	return {
		access_token: JSON.parse(accessToken),
		refresh_token: JSON.parse(refreshToken),
	};
}

export function setTokens({
	access_token,
	refresh_token,
}: {
	access_token: string;
	refresh_token: string;
}) {
	localStorage.setItem("access_token", access_token);
	localStorage.setItem("refresh_token", refresh_token);
}

export function removeTokens() {
	localStorage.removeItem("access_token");
	localStorage.removeItem("refresh_token");
}

