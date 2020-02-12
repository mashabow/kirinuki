import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'crop',
  initialState: {
    angle: 0,
  },
  reducers: {
    setAngle: (state, action: PayloadAction<number>) => {
      state.angle = action.payload;
    },
  },
});

export default slice.reducer;
export const { setAngle } = slice.actions;
