import { UserActions } from "@/constants";

const userReducer = (state: User, action: Action<UserActions, User>): User => {
	switch (action.type) {
		case UserActions.LOGGED_IN: {
			return action.payload;
		}
		case UserActions.LOGGED_OUT: {
			return {
				username: null,
				firstName: null,
				lastName: null,
				province: null,
				city: null,
				postalCode: null,
				address: null,
			};
		}
		case UserActions.INFO_UPDATED: {
			return { ...action.payload, username: state.username };
		}
		case UserActions.USERNAME_UPDATED: {
			return { ...state, username: action.payload.username };
		}
	}
};

export default userReducer;
