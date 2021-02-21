import '../style/Person.css';

const Person = (props) => {
    return (
        <div className="Person" onClick={props.click}>
            <p>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    );
}

export default Person;
