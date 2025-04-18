function App() {
  function handleClick() {
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
