import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/app.css';
import './css/post-list.css';
import './css/post-status-filter.css';
import './css/search-panel.css';
import './css/app-header.css';
import './css/post-add-form.css';
import './css/post-list-item.css';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';


// Кoмпоненты это функции которые могут возвращать jsx елементы,
// они должны быть написаны с большой буквы

// const Header = () => {
//   // Защитаот вредоносных скриптов, реакт тупо записывает его сторокой =)
//   const scr = `Hello world!!`
//   return <h2>{scr}</h2>
// }

// const Field = () => {
//   const holder = "Enter here";
//   const styledField = {
//     width: `300px`
//   }

//   return <input
//     style={styledField}
//     type="text"
//     placeholder={holder}
//     autoComplete=""
//     className="first"
//     htmlFor=""
//   />
// }

// const Button = () => {
//   const text = `Log in`;
//   const logged = false;
//   // const res = () => {
//   //   return `Log in, please`
//   // }
//   // ошибка, объекты нельзяя помещать в переменные для рендера их в приложении
//   // const p = {}
//   // const p = <p>Log in</p>
//   return <button>{logged ? `Enter` : text}</button>
//   // return <button>{3 + 4}</button>
// }

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <Field />
//       <Button />
//     </div>
//   )
// }

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
