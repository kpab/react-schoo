function ListItem(props) {
    return (
        <li>
            <h2>{props.item.name}</h2>
            <p>¥{props.item.price}</p>
        </li>
    )
}

export default ListItem
