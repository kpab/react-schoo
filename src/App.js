function App() {
  function handleClick(e, name) {
    e.preventDefault();
    console.log(e);
    console.log(name);
  }
  return (
    <div>
      <p onClick={e => handleClick(e, 'John')}>John</p>
      <p onClick={e => handleClick(e, 'Paul')}>Paul</p>
    </div>
  );
}

export default App;
