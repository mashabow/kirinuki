import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  readonly fileName: string | null;
  readonly url: string | null;
  readonly angle: number;
}

const initialState: State = {
  fileName: null,
  url: null,
  angle: 0,
};

const slice = createSlice({
  name: 'sourceImage',
  initialState,
  reducers: {
    open: (_, action: PayloadAction<Pick<State, 'fileName' | 'url'>>) => ({
      ...action.payload,
      angle: initialState.angle,
    }),
    close: () => initialState,
    setAngle: (state, action: PayloadAction<number>) => {
      state.angle = action.payload;
    },
    rotate: (state, action: PayloadAction<number>) => {
      state.angle = state.angle + action.payload;
    },
  },
});

export default slice.reducer;
export const { open, close, setAngle, rotate } = slice.actions;
