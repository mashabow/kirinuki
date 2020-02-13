import { combineReducers } from 'redux';

import crops from './features/crops';
import sourceImage from './features/sourceImage';

const rootReducer = combineReducers({
  crops,
  sourceImage,
});

export default rootReducer;

// useSelector を型付けする
declare module 'react-redux' {
  interface DefaultRootState extends ReturnType<typeof rootReducer> {}
}
