import './App.css';



function App() {
  function formatName(name) {
    return `${name.firstName} ${name.lastName}`
  }

  const name = {
    firstName: "pani",
    lastName: "py"
  }

  return (
    <h1>Hello, {formatName(name)}</h1>

  );
}

export default App;
