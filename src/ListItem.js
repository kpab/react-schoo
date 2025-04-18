function ListItem(props) {
    return (
        <li>
            <h2 onClick={() => props.onClick(props.item.id)}>
                {props.item.name}
            </h2>
            <p>¥{props.item.price}</p>
            {props.item.isDone && <p>購入済み</p>}
        </li>
    )
}

export default ListItem
