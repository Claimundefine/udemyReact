import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('Should setup default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('Should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'});
});


test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SORT_BY_DATE'};
    const state = filtersReducer(currentState, action);

    expect(state.sortBy).toBe('date');
});

test('should set textFilter', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SET_TEXT_FILTER', text: 'abc'};
    const state = filtersReducer(currentState, action);

    expect(state.text).toBe('abc');
});

test('should set startDate', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SET_START_DATE', startDate: 12345};
    const state = filtersReducer(currentState, action);

    expect(state.startDate).toBe(12345);
});

test('should set endDate', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SET_END_DATE', endDate: 12345};
    const state = filtersReducer(currentState, action);

    expect(state.endDate).toBe(12345);
});