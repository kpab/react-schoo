import React from 'react'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    // コンポーネントがマウントされたときに呼ばれる
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    // コンポーネントがアンマウント(削除)されるときに呼ばれる
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    // dateの書き換え
    tick() {
        // setStateを使ってstateを更新する
        // setStateは非同期処理なので、stateの値を直接参照することはできない
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Clock;
