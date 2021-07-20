import selectExpenses from '../../selectors/expenses';
import moment from 'moment';

const expenses = [{
    id: '1',
    description: 'food',
    note: '',
    amount: 195,
    createdAt: 0
},{
    id: '2',
    description: 'rent',
    note: '',
    amount: 195000,
    createdAt: -100000000
},{
    id: '3',
    description: 'credit',
    note: '',
    amount: 40000,
    createdAt: moment(0).add(4, 'days').valueOf()
}];

test('Should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1]]);
});

test('Should filter start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0]]);
});

test('Should filter end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        endDate: moment(0),
        startDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1]]);
});

test('Should filter by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        endDate: undefined,
        startDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('Should filter by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        endDate: undefined,
        startDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});