import { useState } from 'react'
import ListItem from './ListItem'

const shoppingList = [
  { id: 1, name: '牛肉', price: 500 },
  { id: 2, name: 'たまねぎ', price: 200 },
  { id: 3, name: 'にんじん', price: 100 },
]

function App(props) {
  const [list, setList] = useState(shoppingList)
  const remainingAmount = list.filter(item => !item.isDone).length

  const handleClick = id => {
    const l = list.slice();
    l.forEach(item => {
      if (item.id === id) {
        item.isDone = !item.isDone
      }
    })
    setList(l)
  }

  return (
    <>
      <h1>Shopping List</h1>
      <p>残数: {remainingAmount}</p>
      <ul>
        {list.map(item => <ListItem key={item.id} item={item} onClick={handleClick} />)}
      </ul>
    </>
  )
}

export default App;
