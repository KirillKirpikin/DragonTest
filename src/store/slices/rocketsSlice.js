import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import rocketsService from '../../services/rocketsService';

export const getRockets = createAsyncThunk('GET_ROCKETS', async (_, thunkAPI)=>{
    try {
        return await rocketsService.getRockets();   
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})



const rocketsSlice = createSlice({
    name: 'rockets',
    initialState:{
        rockets: null,
        isError: false,
        isLoading: false,
        message: ''

    },
    extraReducers: (builder) =>{
        builder.addCase(getRockets.pending, (state)=>{
            state.isLoading = true
        });
        builder.addCase(getRockets.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.rockets = action.payload
        });
        builder.addCase(getRockets.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError= true;
            state.message = action.payload.message
            state.rockets=null;
        });
    }
})

export default rocketsSlice.reducer;