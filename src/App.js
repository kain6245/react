import './App.css';

import { useReducer, useMemo } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import Login from './view/login/Login'
import Index from './view/home/Home';
import NotFound from './view/not-found/NotFound';
import KakaoCallback from './view/kakao-callback/KakaoCallback';

import MainContext, {initialState, reducer} from './context/MainContext';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue = useMemo( () => {
    return {state, dispatch};
  }, [state, dispatch]);

  return (
    <MainContext.Provider value={contextValue}>
      <Router>
          <Routes>
            <Route exact path="/" element={<Index />} />
            <Route exact path="/login" element={<Login />} />
            <Route path ="/callback/kakao" element={<KakaoCallback />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </Router>
    </MainContext.Provider>
  );
}

export default App;
