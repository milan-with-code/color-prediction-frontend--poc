import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchGameTime = createAsyncThunk(
  'timer/fetchGameTime',
  async (_, {rejectWithValue}) => {
    const token = process.env.TOKEN_KEY;
    const url = `${process.env.LOCALHOST_URL}/current-game`;

    if (!token || !url) {
      return rejectWithValue('Missing token or URL');
    }

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || 'Server error');
    }
  },
);

const timerSlice = createSlice({
  name: 'timer',
  initialState: {
    timeLeft: 30,
    gameId: '0000000000000000',
    status: 'idle',
    isLoading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchGameTime.pending, state => {
        state.status = 'loading';
        state.isLoading = true;
      })
      .addCase(fetchGameTime.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.timeLeft = action.payload.timeLeft;
        state.gameId = action.payload.gameId;
        state.isLoading = false;
      })
      .addCase(fetchGameTime.rejected, state => {
        state.status = 'failed';
        state.isLoading = false;
      });
  },
});

export default timerSlice.reducer;
