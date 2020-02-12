import { combineReducers } from 'redux';

import crop from './features/crop';

const rootReducer = combineReducers({
  crop,
});

export default rootReducer;

// useSelector を型付けする
declare module 'react-redux' {
  interface DefaultRootState extends ReturnType<typeof rootReducer> {}
}
