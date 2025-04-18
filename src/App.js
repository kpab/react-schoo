import Clock from "./Clock";

const shoppingList = [
  { id: 1, name: '牛肉', price: 500 },
  { id: 2, name: 'たまねぎ', price: 200 },
  { id: 3, name: 'にんじん', price: 100 },
]

function App(props) {
  return (
    <>
      <h1>Shopping List</h1>
      <Clock />
      <ul>
        {
          shoppingList.map(item => {
            return (
              <li key={item.id}>
                <h2>{item.name}</h2>
                <p>¥{item.price}</p>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default App;
