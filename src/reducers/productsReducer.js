export default function productsReducer(state = []) {
    return state;
}

export function getProduct(state, props) {
    return state.products.find(item => item.id === props.id);
}
