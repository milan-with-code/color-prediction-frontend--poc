import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch current game time from backend
export const fetchGameTime = createAsyncThunk(
  'timer/fetchGameTime',
  async (_, {rejectWithValue}) => {
    const token = process.env.TOKEN_KEY;
    try {
      const response = await axios.get(
        `${process.env.LOCALHOST_URL}/current-game`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : 'Server error',
      );
    }
  },
);

const timerSlice = createSlice({
  name: 'timer',
  initialState: {
    timeLeft: 30,
    gameId: '0000000000000000',
    status: 'idle',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchGameTime.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchGameTime.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.timeLeft = action.payload.timeLeft;
        state.gameId = action.payload.gameId;
      })
      .addCase(fetchGameTime.rejected, state => {
        state.status = 'failed';
      });
  },
});

export default timerSlice.reducer;
