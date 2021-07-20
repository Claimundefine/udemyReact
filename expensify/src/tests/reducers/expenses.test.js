import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should test default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});

    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove by id if id not found', () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: 420
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add expense', () => {
    const newExpense = {
        id: 4,
        description: 'gyubee',
        note: 'very expense',
        amount: 5000,
        createdAt: 1234

    }
    const action = {
        type: "ADD_EXPENSE",
        expense: newExpense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, newExpense]);
});

test('should edit expense', () => {
    const newExpense = {
        id: 4,
        description: 'gyubee',
        note: 'very expense',
        amount: 5000,
        createdAt: 1234

    }
    const action = {
        type: "ADD_EXPENSE",
        expense: newExpense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, newExpense]);
});