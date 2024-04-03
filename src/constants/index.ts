// urls
export const BASE_URL = "http://localhost:3550/";
export enum URL {
	REGISTER = BASE_URL + "users", // Endpoint for user registration
	LOGIN = BASE_URL + "auth", // Endpoint for user login
	PROFILE = BASE_URL + "auth/profile", // Endpoint for fetching user profile data
	LOGOUT = BASE_URL + "auth/logout", // Endpoint for user logout
	REFRESH = BASE_URL + "auth/refresh", // Endpoint for refreshing access & refresh token
	CATEGORIES = BASE_URL + "categories", // Endpoint for fetching product categories
	PRODUCTS = BASE_URL + "products", // Endpoint for fetching individual products
	CARTS = BASE_URL + "carts", // Endpoint for interacting with user shopping cart
}

// actions
export enum CartActions {
	ITEMS_UPDATED = "ITEMS_UPDATED", // Action type for when cart items have been updated
	ITEM_ADDED = "ITEM_ADDED", // Action type for when an item is added to the cart
	ITEM_REMOVED = "ITEM_REMOVED", // Action type for when an item is removed from the cart
	ITEM_COUNT_INCREASED = "ITEM_COUNT_INCREASED", // Action type for when the count of an item in the cart is increased
	ITEM_COUNT_DECREASED = "ITEM_COUNT_DECREASED", // Corrected: Action type for when the count of an item in the cart is decreased
}

export enum UserActions {
	LOGGED_IN,
	LOGGED_OUT,
	INFO_UPDATED,
	USERNAME_UPDATED,
}

// product limit in grid view
export const LIMIT = 12;
