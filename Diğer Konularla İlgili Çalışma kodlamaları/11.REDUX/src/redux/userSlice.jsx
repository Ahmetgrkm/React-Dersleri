import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


const initialState = {
    users: [],
    loading: false
}
//örnek taslak olsun diye yorum satırı olarak bırakıyorum.
// const fetchUserById = createAsyncThunk(
//     'users/fetchByIdStatus',
//     async (userId: number, thunkAPI) => {
//       const response = await userAPI.fetchById(userId)
//       return response.data
//     },
//   )


export const getAllUsers = createAsyncThunk('users', async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
})


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        //HTTP isteği olmaz ise kullanılır!! Eğer olursa..
    },
    extraReducers: (builder) => {
        // eğer olursa burası kullanılı
        builder.addCase(getAllUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        })

    }
})

export const { } = userSlice.actions
export default userSlice.reducer