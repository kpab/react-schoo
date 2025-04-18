function ListItem(props) {
  return (
    <li>{props.value}</li>
  );
}

function App() {
  const numbers = [1, 2, 3, 4, 5]
  const listItems = numbers.map(number => {
    return <ListItem key={number.toString()} value={number} />
  });
  return (
    <ul>
      {listItems}
    </ul>
  );
}

export default App;
