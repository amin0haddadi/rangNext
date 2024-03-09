import { CartActions } from "@/constants";
import React, { createContext, useReducer } from "react";

const initialState: any = [];

export const CartContext = createContext({
	state: initialState,
	dispatch: (_: Action<CartActions>) => {},
});

const reducer = (state: any, action: Action<CartActions>): any => {
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
