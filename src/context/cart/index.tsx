import { CartActions } from "@/constants";
import React, { createContext, useReducer } from "react";

const initialState: Cart = [];

export const CartContext = createContext({
	state: initialState,
	dispatch: (_: Action<CartActions>) => {},
});

const reducer = (state: Cart, action: Action<CartActions>): Cart => {
	return [];
};

interface IContextProviderProps extends React.PropsWithChildren {}

const ContextProvider: React.FC<IContextProviderProps> = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, []);
	return (
		<CartContext.Provider value={{ state, dispatch }}>
			{children}
		</CartContext.Provider>
	);
};

export default ContextProvider;
