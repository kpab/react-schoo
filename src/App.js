import './App.css';



function App() {
  function greetingName(name) {
    if (name) {
      return <h1>{`Hello, ${name.firstName} ${name.lastName}`}</h1>
    } else {
      return <h1>Hello, Stranger</h1>
    }

  }

  const name = {
    firstName: "pani",
    lastName: "py"
  }

  return (
    <>
      {greetingName(name)}
    </>
  );
}

export default App;
