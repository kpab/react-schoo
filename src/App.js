function App() {
  function handleClick(e) {
    e.preventDefault();
    console.log('clicked!')
  }
  return (
    <div>
      <h1 onClick={handleClick}>
        click me
      </h1>
    </div>
  );
}

export default App;
