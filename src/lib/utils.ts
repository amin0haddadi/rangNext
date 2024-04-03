export function getTokens(): {
	access_token: string;
	refresh_token: string;
} {
	// Check if window is defined (i.e., we're on the client side)
	if (typeof window !== "undefined") {
		const access_token = localStorage.getItem("access_token");
		const refresh_token = localStorage.getItem("refresh_token");
		if (!access_token || !refresh_token) {
			throw new Error("Token Not Found! Please Login");
		}
		return {
			access_token,
			refresh_token,
		};
	} else {
		// Handle the case where we're on the server side
		throw new Error("Cannot access localStorage on the server side");
	}
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

export function setCart(cart: Cart) {
	localStorage.setItem("cart", JSON.stringify(cart));
}

export function getCart(): Cart {
	const cart = localStorage.getItem("cart");
	if (!cart) return [];
	return JSON.parse(cart);
}

export function formatPriceToIranRial(price: number): string {
	// Convert the price to Iran Rial (1 Toman = 100 Rial)
	// const rial = price / 100;

	// Format the price with a comma as the thousands separator
	const formattedPrice = new Intl.NumberFormat("fa-IR", {
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
		compactDisplay: "short",
		currencyDisplay: "narrowSymbol",
	}).format(price);

	return `${formattedPrice} ریال`;
}

export function debounce<T extends (...args: any[]) => void>(
	func: T,
	wait: number
) {
	let timeoutId: NodeJS.Timeout | null = null;

	return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}

		timeoutId = setTimeout(() => {
			func.apply(this, args);
		}, wait);
	};
}
