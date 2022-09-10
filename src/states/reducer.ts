import { counterSliceReducer } from './counter-slice/counterSlice';
import { counterReducer } from './counter/counterReducer';

const reducers = {
  counterState: counterReducer,
  counterSlice: counterSliceReducer.reducer
};

export default reducers;
