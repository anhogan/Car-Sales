import React, { useReducer } from 'react';
import { reducer, initialState } from './reducers';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const removeFeature = item => {
    dispatch({ type: 'REMOVE_FEATURE', payload: item });
  };

  const buyItem = item => {
    dispatch({ type: 'ADD_FEATURE', payload: item });
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem} />
        <Total />
      </div>
    </div>
  );
};

export default App;
