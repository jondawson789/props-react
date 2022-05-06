const App = () => (
    <div>
    <Tweet
      name="bob1"
      username="bob1"
      date={new Date().toDateString()}
      message="i am bob1!"
    />
    <Tweet
      name="bob2"
      username="bob2"
      date={new Date().toDateString()}
      message="i am bob2"
    />
    <Tweet
      name="bob3"
      username="bob3"
      date={new Date().toDateString()}
      message="i am bob3"
    />
  </div>
  );
  
  ReactDOM.render(<App/>,
    document.getElementById("root")); 