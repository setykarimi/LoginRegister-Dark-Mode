import React from 'react';
import Form from './components/Form'
const isLogin = false;

const App = () => {
  return (<Form title={isLogin}
    isLogin={isLogin}
    isLoginForm={isLogin}
  />)
}

export default App