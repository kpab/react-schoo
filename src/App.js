function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }
  return <h1>Please sign up.</h1>;
}

function App() {
  const isLoggedIn = true;
  return (
    <div>
      {
        isLoggedIn &&
        <h1>Welcome back!</h1>
      }
    </div>
  );
}

export default App;
