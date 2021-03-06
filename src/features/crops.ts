import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 各プロパティの意味は以下の図を参照
// https://github.com/fengyuanchen/cropperjs/blob/v1.5.6/docs/images/data.jpg
interface CropParams {
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
  readonly rotate: number;
}

interface Crop {
  readonly params: CropParams;
  readonly divStyle: {
    readonly width: string;
    readonly height: string;
  };
  readonly imgStyle: {
    readonly width: string;
    readonly height: string;
    readonly transform: string;
  };
}

const initialState: readonly Crop[] = [];

const slice = createSlice({
  name: 'crops',
  initialState,
  reducers: {
    addCrop: (state, action: PayloadAction<Crop>) => {
      state.push(action.payload);
    },
    deleteCrop: (state, action: PayloadAction<number>) => {
      state.splice(action.payload, 1);
    },
    clearCrops: () => initialState,
  },
});

export default slice.reducer;
export const { addCrop, deleteCrop, clearCrops } = slice.actions;
