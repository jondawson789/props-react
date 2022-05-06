const App = () => (
    <div>
      <Person
      name = "bob"
      age = {30}
      hobbies={["bowling", "basketball"]} />
    <Person
        name="Bart"
        age={10}
        hobbies={["poker", "soccer"]}
      />
      
    </div>
  );
  
  ReactDOM.render(<App/>,
    document.getElementById("root")); 