import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { POST_REGISTER_API_URL, POST_LOGIN_API_URL } from '../../utils/apiUrl';
import { postRequest, postFormRequest } from '../../utils/methods';

const postRegisterRequest = (actionType , apiUrl) => {
    //rejectWithValue는 에러시 상태 코드와 메시지를 포함한 값을 가짐
    return createAsyncThunk(actionType, async (postData,{ rejectWithValue }) => {
    
    try {
        const options = {
            method: "POST",
            body : postData,
        }
        const response = await postFormRequest(apiUrl, options);
        console.log(response)
        return response;
    } catch (error) {
        return rejectWithValue(error)
        }
        })
}

const handleFulfilled = (stateKey) => (state, action) => {
    state[stateKey] = action.payload; //응답 데이터
}

const handleRejected = (state, action) => {
    state.isError = true;
    state.errrorMessage = action.payload?.msg || "Error Occured";
}

const postLoginRequest = (actionType, apiUrl) => {
    return createAsyncThunk(actionType, async(postData, { rejectWithValue }) => {
    try {
        const options = {
            body: JSON.stringify(postData),
        };
        return await postRequest(apiUrl, options);
    } catch (error) {
        return rejectWithValue(error);
    }
    })
}

export const fetchRegister = postRegisterRequest(
    "fetchRegister", POST_REGISTER_API_URL
);

export const fetchLogin = postLoginRequest(
  'fetchLogin',  POST_LOGIN_API_URL
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    postRegisterStatus: null,
  },
    extraReducers: (builder) => {
        builder.addCase(fetchRegister.fulfilled, handleFulfilled("postRegisterStatus"))
               .addCase(fetchRegister.rejected, handleRejected)
               .addCase(fetchLogin.fulfilled, handleFulfilled('postLoginStatus'))
               .addCase(fetchLogin.rejected, handleRejected);
  },
});

export default authSlice.reducer;
