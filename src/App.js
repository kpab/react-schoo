function Dialog(props) {
  return (
    <div className="dialog">
      {props.children}
    </div>
  )
}

function App() {
  return (
    <Dialog>
      <h1>Welcome</h1>
      <h2>It's sunny today.</h2>
    </Dialog>
  );
}

export default App;
