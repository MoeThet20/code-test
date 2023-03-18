import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedCard: []
};

export const CardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        selectedCard: (state, action) => {
            state.selectedCard = action.payload;
        },
        unSelectedCard: (state, action) => {
            state.selectedCard = action.payload;
        },
        clearAllCard: (state) => {
            state.selectedCard = [];
        }
    }
});

export const { selectedCard, unSelectedCard, clearAllCard } = CardSlice.actions;

export default CardSlice.reducer;
