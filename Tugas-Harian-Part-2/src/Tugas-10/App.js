import logo from './logo.png';
import './App.css';

const TodoList = (props) => {
  return (
    <div>
      <div className="Todo">
        <input
          type="checkbox"
        />
        <label>{props.todo}</label>
      </div>
      <hr></hr>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <div className="Box">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>THINGS TO DO</h1>
        <p>During bootcamp in sanbercode</p>
        <hr></hr>
        <TodoList todo="Belajar GIT & CLI" />
        <TodoList todo="Belajar HTML & CSS" />
        <TodoList todo="Belajar Javascript" />
        <TodoList todo="Belajar ReactJS Dasar" />
        <TodoList todo="Belajar ReactJS Advance" />

        <input className="Button" value="SEND" disabled></input>
      </div>
    </div>
  );
}

export default App;
