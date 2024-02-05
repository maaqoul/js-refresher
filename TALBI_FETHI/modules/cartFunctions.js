export const add = (cart, product) => {cart.push(product); return `${product} Added`};
export const removeLast = (cart) => {cart.pop(); ; return 'Last one removed'};