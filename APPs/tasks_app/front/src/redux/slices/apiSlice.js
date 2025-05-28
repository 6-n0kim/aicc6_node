import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GET_TASKS_API_URL } from '../../utils/apiUrl';
import { getRequest } from '../../utils/requests';

const getItemsFetchThunk = (actionType, apiUrl) => {
  return createAsyncThunk(actionType, async (userId) => {
    // console.log(apiUrl, userId);
    const fullPath = `${apiUrl}/${userId}`;
    return await getRequest(fullPath);
  });
};

export const fetchGetItems = getItemsFetchThunk(
  'fetchGetItems',
  GET_TASKS_API_URL
);

const handleFulfilled = (stateKey) => (state, action) => {
  state[stateKey] = action.payload;
};

const handleRejected = (state, action) => {
  console.log('Error' + action.payload);
};

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    getItemsData: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetItems.fulfilled, handleFulfilled('getItemsData'))
      .addCase(fetchGetItems.rejected, handleRejected);
  },
});

export default apiSlice.reducer;
