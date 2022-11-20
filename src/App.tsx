import React, {useState} from 'react';
import './App.css';
import CounterBody from "./components/CounterBody";
import SettingsBody from "./components/SettingsBody";

export type ButtonDataType = {
    name: string
    callback: () => void //возможно maxToSet: number, minToSet: number надо будет убрать
    isDisabled: boolean
}

type StateType = {
    score: number
    min: number
    max: number
    isSetMaxChanged: boolean
    isSetMinChanged: boolean
}

function App() {

    const [state, setState] = useState<StateType>(
        {
            score: 0,
            min: 0,
            max: 5,
            isSetMaxChanged: false,
            isSetMinChanged: false
        }
    )

    const [maxInput, setMaxInput] = useState(state.max);
    const [minInput, setMinInput] = useState(state.min);

    const increment = () => {
        return state.score < state.max ? setState({...state, score: state.score + 1}) : '';
    }

    const reset = () => {
        setState({...state, score: minInput, max: maxInput, min: minInput})
    }

    // const getMaxMinFromSettingsInputs = (max: number, min: number) => {
    //     setMaxInput(max);
    //     setMinInput(min);
    // }

    const setValues = () => {
        setState({
            ...state,
            score: minInput,
            max: maxInput, //state.inputMax
            min: minInput, //state.inputMin
            isSetMaxChanged: false,
            isSetMinChanged: false
        });
        console.log(state)
    }

    const checkMaxInputValue = (max: number, isSetMaxChanged: boolean) => {
        setState({...state, isSetMaxChanged});
        setMaxInput(max);
        console.log(state)
    }

    const checkMinInputValue = (min: number, isSetMinChanged: boolean) => {
        setState({...state, isSetMinChanged});
        setMinInput(min);
        console.log(state)
    }

    const incButton: ButtonDataType = {
        name: 'INC',
        callback: increment,
        isDisabled: state.score === state.max
    }
    const resButton: ButtonDataType = {
        name: 'RESET',
        callback: reset,
        isDisabled: state.score === state.min
    }
    const setButton: ButtonDataType = {
        name: 'SET',
        callback: setValues,
        isDisabled: (!state.isSetMinChanged) && (!state.isSetMaxChanged)
    }

    return (
        <div className="App">

            <SettingsBody
                setButton={setButton}
                checkMaxInputValue={checkMaxInputValue}
                checkMinInputValue={checkMinInputValue}
                stateMax={state.max}
                stateMin={state.min}
            />

            <CounterBody
                score={state.score}
                max={state.max}
                incButton={incButton}
                resButton={resButton}
            />

        </div>
    );
}

export default App;
