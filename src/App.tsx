import { useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import { useAppDispatch } from './store/hook';
import { directionsFetch } from './store/directionsSlice';
import { Layout } from './components/Layout';
import { filterFetch } from './store/filterSlice';
import { findArr } from './utils/findArr';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(directionsFetch());
    dispatch(filterFetch());
    
  }, [])

  

  return (
    <div className="App">
      <Layout/>
    </div>
  );
}

export default App;
