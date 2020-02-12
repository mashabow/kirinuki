import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: {
  readonly url: string | null;
  readonly angle: number;
} = {
  url: null,
  angle: 0,
};

const slice = createSlice({
  name: 'sourceImage',
  initialState,
  reducers: {
    setURL: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
    },
    setAngle: (state, action: PayloadAction<number>) => {
      state.angle = action.payload;
    },
  },
});

export default slice.reducer;
export const { setURL, setAngle } = slice.actions;
