import { useEffect } from 'react';
import './App.scss';
import { useAppDispatch } from './store/hook';
import { directionsFetch } from './store/directionsSlice';
import { Layout } from './components/Layout';
import { filterFetch } from './store/filterSlice';

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
