function Person(props) {
    let votes;
    if (props.age >= 18) {
        votes = "go vote"
      } else {
        votes = "go study"; 
      }

    let hobbies = props.hobbies.map(hobby => <li>{hobby}</li>);

    return (
        <div>
        <ul>
        <li>Name: {props.name.slice(0, 6)}</li>
        <li>Age: {props.age}</li>
        </ul>
        <ul>
          Hobbies
          {hobbies}
        </ul>
            <h3>{votes}</h3>
        </div>
       
    );
}