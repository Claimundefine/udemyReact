import { createStore, combineReducers } from "redux";
import uuid from 'uuid';


const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [
                ...state,
                action.expense
            ];
        default: 
            return state;
    }
}

const filtersReducerDefaultState = {
    text: "",
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
} 

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default: 
            return state;
    }
}


const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    }));

console.log(store.getState());

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(addExpense({description: 'Rent', amount: 100}));

const demoState = {
    expenses: [{
        id: "fdafadsf",
        description: "first item",
        note: "this is first item",
        amount: 3400,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        soryBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
}

const user = {
    name: "meme",
    age: 24
}

console.log({
    ...user, location: "meme"
});