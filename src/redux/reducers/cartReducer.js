//Reducer to specify how the cart changes in response to actions
const initCartState = {
    items: [
        {id: 1, name: "Apple", type: "Fruit", quantity: 2},
        {id: 2, name: "Banana", type: "Fruit", quantity: 3},
        {id: 3, name: "Onion", type: "Vegetable", quantity: 2},
        {id: 4, name: "Rice", type: "Grains", quantity: 1}
    ],
    basketItems:[],
    total: 0
}

const cartReducer = (state = initCartState, action) => {
    console.log('state', state);
    return state;
}

export default cartReducer;