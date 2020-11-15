import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/app/app';
import reportWebVitals from './reportWebVitals';


// Кoмпоненты это функции которые могут возвращать jsx елементы,
// они должны быть написаны с большой буквы

// const Header = () => {
//   // Защита от вредоносных скриптов, реакт тупо записывает его сторокой =)
//  const src = <script>asdadssd</script>
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

// function WhoAmI({name,surname,link}) {
// function WhoAmI(props) {
//   return (
//     // <React.Fragment>
//     //   <h1>My name is , surname - </h1>
//     //   <a href="">My profile</a>
//     // </React.Fragment>

//     // Новый синтаксис обретки без лишнего дива и реакт фрагмента
//     <>
//       <h1>My name is {props.name}, surname - {props.surname}</h1>
//       <a href={props.link}>My profile</a>
//     </>
//   )
// }

// OOP style

class WhoAmI extends Component {
  constructor(props) {
    super(props)
    this.state = {
      years: 26,
      // nationality: 'uk'
    }
    // this.nextYear = this.nextYear.bind(this);
    // this.nextYear = () => {
    //   this.setState(state => ({
    //     years: ++state.years
    //   }))
    // }
  }

  // Class fields позволяет записывать свойства и методы класса в не конструктора
  // state = {
  //   years: 26
  // }

  nextYear = () => {
    this.setState(state => ({
      years: ++state.years
    }))
  }

  // nextYear() {
  //   // Ошибка, мутировать нельзя
  //   // this.state.years++
  //   this.setState(state => ({
  //     years: ++state.years
  //   }))
  // }

  render() {
    const { name, surname, link } = this.props;
    const { years } = this.state;
    return (
      <>
        <button onClick={this.nextYear}>++</button>
        <h1>My name is {name}, surname - {surname}, years: {years}</h1>
        <a href={link}>My profile</a>
      </>
    )
  }
}

const All = () => {
  return (
    <>
      <WhoAmI name="John" surname="Smith" link="facebook.com" />
      <WhoAmI name="Ivan" surname="Shepard" link="facebook.com" />
      <WhoAmI name="Vlad" surname="Smith" link="facebook.com" />
    </>
  )
}

ReactDOM.render(
  <All />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
