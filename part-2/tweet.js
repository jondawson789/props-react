function Tweet(props){
    return (
    <div class='tweet'>
        <p>{props.username}</p>
        <p>{props.name}</p>
        <p>{props.date}</p>
        <p>{props.message}</p>
    </div>
    );
}