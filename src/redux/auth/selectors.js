export const selectIsLoggedIn = state => state.users.isLoggedIn;

export const selectUserEmail = state => state.users.user.email;

export const selectIsRefreshing = state => state.users.isRefreshing;
