//Action Creators
//Person who is submitting the form - railway booking/cancelation form
const newBooking = (name, amount) => {
    return {
        type: "NEW_BOOKING",
        payload: {
            name: name,
            amount: amount
        }
    };
};

const cancelBooking = (name, refundAmount) => {
    return {
        type: "CANCEL_BOOKING",
        payload: {
            name: name,
            amount: refundAmount
        }
    };
};

//Reducers
const reservationHistoryReducer = (oldReservationListState = [], action) => {
    switch(action.type) {
        case "NEW_BOOKING" :
            return [...oldReservationListState, action.payload];
        case "CANCEL_BOOKING" :
            return oldReservationListState.filter(record => {
                return record.name !== action.payload.name;
            })
        default :
            return oldReservationListState;
    }
}

const cancellationHistoryReducer = (oldCancellationListState = [], action) => {
    switch(action.type) {
        case "CANCEL_BOOKING" :
            return [...oldCancellationListState, action.payload];
        default :
            return oldCancellationListState;
    }
}

const accountingReducer = (totalMoney = 100, action) => {
    switch(action.type) {
        case "NEW_BOOKING" :
            return totalMoney + action.payload.amount;
        case "CANCEL_BOOKING" :
            return totalMoney - action.payload.refundAmount;
        default :
            return totalMoney;
    }
}

//Redux Store
const { createStore, combineReducers } = Redux;

const railwayCentralStore = combineReducers({
    reservationHistoryReducer : reservationHistoryReducer,
    cancellationHistoryReducer : cancellationHistoryReducer,
    accountingReducer : accountingReducer
})

const store = createStore(railwayCentralStore);

const action = newBooking('Meera', 20);
store.dispatch(action);
store.dispatch(newBooking('Shrihari', 10));
store.dispatch(newBooking('Ku', 30));
store.dispatch(cancelBooking('Ku', '0'));

console.log(store.getState());