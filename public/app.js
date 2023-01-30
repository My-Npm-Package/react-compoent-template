import React from 'react'
import ReactDOM from 'react-dom/client';
// import ReactDemo from '../src/index'    //引入组件
import ReactDemo  from '../src/index'
const App = () => {
    return <ReactDemo/>
};
const root = document.getElementById('root');
ReactDOM.createRoot(root).render(<App />);