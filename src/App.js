function SplitPane(props) {
  return (
    <div className="split-pane">
      <div className="split-pane-left">
        {props.left}
      </div>
      <div className="split-pane-right">
        {props.right}
      </div>
    </div>
  )
}

function App() {
  return (
    <SplitPane
      left={<h1>Welcome</h1>}
      right={<h2>It's sunny today.</h2>}
    />
  );
}

export default App;
