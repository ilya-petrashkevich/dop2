import React, {useEffect, useState} from 'react';
import './App.css';
import Button from "./components/Button";

type ShowType = {
    id: number,
    title: string,
    completed: boolean

}

function App() {
    const [show, setShow] = useState<ShowType[]>([]);
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //         .then((response) => response.json())
    //         .then((json) => setShow(json));
    // }, []);

    const useShowUp = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((json) => setShow(json));

        console.log(show);
    }
    const clean = () => {
        setShow([])
    }

    return (
        <div className="App">
            <Button name={'Show me'} callBack={useShowUp}/>
            <Button name={'Clean me'} callBack={clean} />

            <ul>
                {show.map(e => {
                    return (
                        <li key={e.id}>
                            <span>{e.id}</span>
                            <span>{e.title}</span>
                            <span>{`${e.completed}`}</span>
                        </li>
                    )
                })
                }
            </ul>
        </div>
    );
}

export default App;
