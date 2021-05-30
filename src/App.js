import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from './api/index';
import Movies from './components/Movie/Movies';
const App = () => {
  const items = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    getData(dispatch);
  }, [dispatch]);

  return (
    <div>
      <Movies items={items} />
    </div>
  );
}

export default App;
