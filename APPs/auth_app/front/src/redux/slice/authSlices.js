import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { POST_REGISTER_API_URL, POST_LOGIN_API_URL } from '../../utils/apiUrl';
import { postRequest, postFormRequest } from '../../utils/methods';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    postRegisterStatus: null,
  },
  extraReducers: (builder) => {},
});

export default authSlice.reducer;
