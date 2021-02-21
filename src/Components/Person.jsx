const Person = (props) => {
    console.log(props.click)
    return (
        <div onClick={props.click}>
            <p>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    );
}

export default Person;
