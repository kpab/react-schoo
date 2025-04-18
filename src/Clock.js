import { useState } from 'react';

function Clock(props) {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <h1>Hello, World!</h1>
            <h2>It is {date.toLocaleTimeString()}</h2>
        </div>
    )
}

export default Clock;
