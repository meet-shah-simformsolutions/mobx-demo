import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {observable,configure,action} from 'mobx'
import {observer} from 'mobx-react'
import Main from '../src/component/Main'
import Store from "./store/store"
import Image from "./component/Image"
configure({enforceActions:true})
// const appState = observable({
//   count:0,
//   inc: action(() =>{
//     appState.count += 1;
//   }),
//   dec: action(() =>{
//     appState.count -= 1;
//   }),
//   get multipleby3 () {
//     return this.count * 3
//   },
//   get multipleby4 () {
//     return this.count * 4
//   },
//   reset:action(() =>{
//      appState.count = 0
//   }
// )
// })

const Count = observer((props) =>  (
  <>
    {/* <div>{props.appState.count}</div>
    <button onClick={props.appState.inc}>Add</button>
    <button onClick={props.appState.dec}>Dec</button>
    <div>Multiply By 3 : {props.appState.multipleby3}</div>
    <div>Multiply By 4 : {props.appState.multipleby4}</div>
    <button onClick={props.appState.reset}>reset</button>
    <Main  data={props} /> */}
    <Image/>
  </>
));

ReactDOM.render(
  // <Count appState={store}/>,
  <Image state={Store}/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
