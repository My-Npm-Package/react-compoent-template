import React from 'react'
import ReactDOM from 'react-dom/client';
import ReactDemo from '../src/index.jsx'    //引入组件

console.info(ReactDemo)
const App = () => {
    return <ReactDemo/>
};
const root = document.getElementById('root');
// ReactDOM.createRoot(root).render(<App />)
ReactDOM.createRoot(root).render(<App />);
// render(<App/>, document.getElementById('root'));   //获取虚拟dom的挂载节点