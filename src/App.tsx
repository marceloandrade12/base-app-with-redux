import React from "react";
import FirstScreen from "./screens/FirstScreen";
import { Provider } from "react-redux";
import { combineReducers, createStore} from "redux";
import FirstScreenReducer from "./store/FirstScreen/reducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const appReducers = combineReducers({
  field: FirstScreenReducer
});

const store = createStore(appReducers,composeWithDevTools());

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <FirstScreen />
      </Provider>
    );
  }
}

export default App;
