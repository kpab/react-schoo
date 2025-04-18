import { useState } from 'react';

function ListItem(props) {
    const [isDone, setIsDone] = useState(false);

    return (
        <li>
            <h2 onClick={() => setIsDone(true)}>{props.item.name}</h2>
            <p>¥{props.item.price}</p>
            {isDone && <p>購入済み</p>}
        </li>
    )
}

export default ListItem
