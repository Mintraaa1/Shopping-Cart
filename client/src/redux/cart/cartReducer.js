import { ADD_TO_CART, REMOVE_FROM_CART,INCREASE_QUANTITY,DECREASE_QUANTITY } from "./actiontype";
import { initialState} from "./initiaState";

const nextId = (Item) => {
    return item.reduct((id, item) => Math.max(id,item.id), -1) +1;
};

const findProduceIncart = () {

}

const cartReducer = (state = initialState,action) => {
    switch (action.type) {
        case ADD_TO_CART;
            return;
        case REMOVE_FROM_CART;
            return;
        case INCREASE_QUANTITY;
            return;
        case DECREASE_QUANTITY;
            return;
    }
}