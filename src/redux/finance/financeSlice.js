import { createSlice } from '@reduxjs/toolkit';
import {
  addTransaction,
  updateTransactionsNew,
  updateTransactions,
  deleteTransaction,
} from './financeOperation';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
  totalBalance: null,
  isLoading: false,
  data: [],
  totalQuantityTransactions: 0,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const financeSlice = createSlice({
  name: 'finance',
  initialState,
  extraReducers: builder => {
    builder

      .addCase(updateTransactionsNew.pending, (state, action) => {
        state.error = action.payload;
      })
      .addCase(updateTransactionsNew.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(updateTransactionsNew.fulfilled, (state, action) => {
        state.data = action.payload?.transactions;
        state.totalBalance = action.payload?.totalBalance;
        state.totalQuantityTransactions = action.payload?.quantityTransactions;
        state.isLoggedIn = true;
        state.isLoading = false;
      })

      .addCase(updateTransactions.pending, handlePending)
      .addCase(updateTransactions.rejected, handleRejected)
      .addCase(updateTransactions.fulfilled, (state, action) => {
        state.data = action.payload?.transactions;
        state.totalBalance = action.payload?.totalBalance;
        state.totalQuantityTransactions = action.payload?.quantityTransactions;
        state.isLoggedIn = true;
        state.isLoading = false;
      })

      .addCase(addTransaction.pending, handlePending)
      .addCase(addTransaction.rejected, handleRejected)
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.data = action.payload.rdyTransactions;
        state.totalBalance = action.payload.totalBalance;
        state.totalQuantityTransactions = action.payload.updatedCount;
        state.isLoading = false;
      })

      .addCase(deleteTransaction.pending, handlePending)
      .addCase(deleteTransaction.rejected, handleRejected)
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.data = action.payload?.transactions;
        state.totalBalance = action.payload?.totalBalance;
        state.totalQuantityTransactions = action.payload?.quantityTransactions;
        state.isLoggedIn = true;
        state.isLoading = false;
      });
  },
});

const persistConfig = {
  key: 'leopards/finance',
  storage,
};

export const persistedFinanceReducer = persistReducer(
  persistConfig,
  financeSlice.reducer
);

export const financeReducer = financeSlice.reducer;
