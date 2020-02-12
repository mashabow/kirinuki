import { combineReducers } from 'redux';

import sourceImage from './features/sourceImage';

const rootReducer = combineReducers({
  sourceImage,
});

export default rootReducer;

// useSelector を型付けする
declare module 'react-redux' {
  interface DefaultRootState extends ReturnType<typeof rootReducer> {}
}
