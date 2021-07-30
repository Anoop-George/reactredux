import './App.css';
import rootReducer from './reducers/rootReducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Headercomp from './components/headercomp';
function App() {
  const store = createStore(rootReducer)
  return (
    <div className="App">
      <Provider store={store}>
        <Headercomp/>
      </Provider>
    </div>
  );
}

export default App;
