import { CartActions } from "@/constants";
import { setCart } from "@/lib/utils";

const cartReducer = (
	state: Cart,
	action: Action<CartActions, Cart | Product>
): Cart => {
	switch (action.type) {
		case CartActions.ITEMS_UPDATED: {
			if (!Array.isArray(action.payload))
				throw new Error("payload type does not match");
			const newState = action.payload;
			setCart(newState);
			return newState;
		}
		case CartActions.ITEM_ADDED: {
			if (Array.isArray(action.payload))
				throw new Error("payload type does not match");
			if (
				state.find((item) => item.product._id === (action.payload as Product)._id)
			) {
				alert("item already added");
				return state;
			}
			const newState = [...state, { product: action.payload, quantity: 1 }];
			setCart(newState);
			return newState;
		}
		case CartActions.ITEM_REMOVED:
			if (Array.isArray(action.payload))
				throw new Error("payload type does not match");
			const newState = state.filter(
				(item) => item.product._id !== (action.payload as Product)._id
			);
			setCart(newState);
			return newState;
		case CartActions.ITEM_COUNT_INCREASED: {
			if (Array.isArray(action.payload))
				throw new Error("payload type does not match");
			const newState = state.map((item) =>
				item.product._id === (action.payload as Product)._id
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
			setCart(newState);
			return newState;
		}
		case CartActions.ITEM_COUNT_DECREASED: {
			if (Array.isArray(action.payload))
				throw new Error("payload type does not match");
			const newState = state.map((item) =>
				item.product._id === (action.payload as Product)._id
					? { ...item, quantity: item.quantity - 1 }
					: item
			);
			setCart(newState);
			return newState;
		}
	}
};

export default cartReducer;
