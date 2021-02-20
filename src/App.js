import './App.css';
import Person from './Components/Person.jsx';

function App() {
    return (
        <div className="App">
            <h1>Hi, I'm a react component</h1>
            <p>This is really working!</p>
            <Person name="Marcos" age="28" />
            <Person name="Carlos" age="29" >My Hobbies: Racing</Person>
            <Person name="Ana" age="26" />
        </div>
    );
}

export default App;
