export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

export const addProduct = (product) => ({
	type: ADD_PRODUCT,
	payload: product,
});

export const removeProduct = (productId) => ({
	type: REMOVE_PRODUCT,
	payload: productId,
});

export const updateProduct = (product) => ({
	type: UPDATE_PRODUCT,
	payload: product,
});
