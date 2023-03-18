import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedCards: []
};

export const CardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        selectedCard: (state, action) => {
            state.selectedCards = action.payload;
        },
        unSelectedCard: (state, action) => {
            state.selectedCards = action.payload;
        },
        clearAllCard: (state) => {
            state.selectedCards = [];
        }
    }
});

export const { selectedCard, unSelectedCard, clearAllCard } = CardSlice.actions;

export default CardSlice.reducer;
