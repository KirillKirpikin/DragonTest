import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import rocketsService from '../../services/rocketsService';


export const getOneRocket = createAsyncThunk('GET_ONE_ROCKET', async (id, thunkAPI)=>{
    try {
        return await rocketsService.getOneRocket(id);   
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

const oneRocketSlice = createSlice({
    name: 'oneRocket',
    initialState:{
        oneRocket: null,
        isError: false,
        isLoading: false,
        message: ''

    },
    extraReducers: (builder) =>{
        builder.addCase(getOneRocket.pending, (state)=>{
            state.isLoading = true
        });
        builder.addCase(getOneRocket.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.oneRocket = action.payload;
        });
        builder.addCase(getOneRocket.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError= true;
            state.message = action.payload.message
            state.oneRocket=null;
        });
    }
})

export default oneRocketSlice.reducer;