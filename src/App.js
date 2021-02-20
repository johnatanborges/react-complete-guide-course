import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person.jsx';

// function App() {
//     return (
//         <div className="App">
//             <h1>Hi, I'm a react component</h1>
//             <p>This is really working!</p>
//             <button>Switch Name</button>
//             <Person name="Marcos" age="28" />
//             <Person name="Carlos" age="29" >My Hobbies: Racing</Person>
//             <Person name="Ana" age="26" />
//         </div>
//     );
// }

class App extends Component {
    state = {
        persons: [
            { name: 'Max', age: 28 },
            { name: 'Manu', age: 29 },
            { name: 'Ana', age: 26 },
        ],
    }

    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a react component</h1>
                <p>This is really working!</p>
                <button>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My Hobbies: Racing</Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
            </div>
        );
    }
}

export default App;
