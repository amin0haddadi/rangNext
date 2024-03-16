// ====== Generic Server Response Type ======
type ServerResponse<T> = {
	statusCode: number; // HTTP status code of the response
	data: T; // Data payload of the response
	message?: string; // Optional message that may come with the response
};

// ====== Base Data Types ======
type ProductBase = {
	_id: number;
	name: string;
	images: string[];
	price: number;
	quantity: number;
}

type Category = {
	id: string;
	name: string; // Name of the category
};

type Product = ProductBase & {
	description: string; // Description of the product
	category: Category; // Category the product belongs to
};

type CartItem = {
	id: string;
	quantity: number; // Quantity of the product in the cart
	product: Omit<ProductBase, "quantity">; // Product information excluding quantity
};

// ====== Response Data Types ======
type UserResponse = {
	user: { [K in "username" | "id"]: string }; // User object containing username and ID
}; // Response structure for user info
type TokensResponse = {
	tokens: { access_token: string; refresh_token: string }; // Object containing access and refresh tokens
}; // Response structure for tokens
type ProductsResponse = {
	products: ProductBase[];
	count: number;
}; // Response structure for a list of products
type ProductResponse = {
	product: Product;
}; // Response structure for a single product detail
type CategoriesResponse = {
	categories: Category[];
}; // Response structure for a list of categories
type CategoryResponse = {
	category: Category & {
		products: ProductBase[]; // Category information including a list of products within the category
	};
	count: number;
}; // Response structure for a single category
type CartsResponse = {
	carts: CartItem[];
}; // Response structure for a list of cart items

// ====== Generic Action Type ======
type Action<T> = {
	type: T; // Type of action being performed
	payload: CartState; // Payload associated with the action
};
