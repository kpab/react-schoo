import ListItem from './ListItem'

const shoppingList = [
  { id: 1, name: '牛肉', price: 500 },
  { id: 2, name: 'たまねぎ', price: 200 },
  { id: 3, name: 'にんじん', price: 100 },
]

function App(props) {
  return (
    <>
      <h1>Shopping List</h1>
      <ul>
        {
          shoppingList.map(item => <ListItem key={item.id} item={item} />)
        }
      </ul>
    </>
  )
}

export default App;
