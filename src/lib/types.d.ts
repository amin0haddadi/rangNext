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
	_id: string;
	name: string; // Name of the category
};

type User = {
	id: string | null;
	firstName: string | null;
	lastName: string | null;
	phoneNumber: string | null;
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

type Payment = {
	data: {
		authority: string;
		fee: number;
		fee_type: string;
		code: number;
		message: string;
		link: string;
	};
	errors: Array<any>;
};

type Order = {
	id: string;
	amount: number;
	carts: {
		id: string;
		quantity: number;
		product: Product;
		order: {
			id: string;
			amount: number;
			authority: string;
			created_at: string;
			updated_at: string;
		};
	}[];
};

// * ====== Response Data Types ======
type UserRegisterResponse = {
	user: { username: string }; // User object containing username and ID
}; // Response structure for user username

type UserProfileResponse = {
	user: { username: string } & Omit<User, "username">; // User object containing username and ID
}; // Response structure for user username

type UserLoginResponse = {
	tokens: { access_token: string; refresh_token: string }; // Object containing access and refresh tokens
}; // Response structure for login

type TokensResponse = UserLoginResponse; // Response structure for tokens

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

type ZarinpalResponse = {
	url: string;
};

type OrdersResponse = {
	orders: Order[];
	count: number;
};

// * ====== Context Types ======
type Action<T, Payload> = {
	type: T; // Type of action being performed
	payload: Payload; // Payload associated with the action
};

type Cart = { product: Product; quantity: number; id?: string }[];
