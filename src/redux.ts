import { combineReducers } from 'redux';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const cropSlice = createSlice({
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

export const { setAngle } = cropSlice.actions;

const rootReducer = combineReducers({
  crop: cropSlice.reducer,
});

export default rootReducer;

// useSelector を型付けする
declare module 'react-redux' {
  interface DefaultRootState extends ReturnType<typeof rootReducer> {}
}
