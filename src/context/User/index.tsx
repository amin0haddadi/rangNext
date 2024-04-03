"use client";
import { CartActions, UserActions } from "@/constants";
import { createContext, useEffect, useReducer } from "react";
import userReducer from "./userReducer";
import { getCart } from "@/lib/utils";
import { fetchProfile } from "@/lib/api/auth";
import cartReducer from "../cart/cartReducer";

const initialCartState: Cart = [];
const initialUserState: User = {
	username: null,
	firstName: null,
	lastName: null,
	province: null,
	city: null,
	postalCode: null,
	address: null,
};

export const Context = createContext({
	cart: initialCartState,
	cartDispatch: (action: Action<CartActions, Cart | Product>) => {},
	user: initialUserState,
	userDispatch: (action: Action<UserActions, User>) => {},
});

interface IContextProviderProps extends React.PropsWithChildren {}

const ContextProvider: React.FC<IContextProviderProps> = ({ children }) => {
	const [cart, cartDispatch] = useReducer(cartReducer, initialCartState);
	const [user, userDispatch] = useReducer(userReducer, initialUserState);

	useEffect(() => {
		const setContext = async () => {
			cartDispatch({ type: CartActions.ITEMS_UPDATED, payload: getCart() });
			const {
				data: { user },
			} = await fetchProfile();
			userDispatch({ type: UserActions.LOGGED_IN, payload: user });
		};
		setContext();
	}, []);

	return (
		<Context.Provider value={{ cart, cartDispatch, user, userDispatch }}>
			{children}
		</Context.Provider>
	);
};

export default ContextProvider;
