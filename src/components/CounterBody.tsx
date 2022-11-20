import React from 'react';
import CounterDisplay from "./CounterDisplay";
import Button from "./Button";
import {ButtonDataType} from "../App";
type CounterBodyPropsType = {
    score: number
    max:number
    incButton: ButtonDataType
    resButton: ButtonDataType
}

const CounterBody = (props: CounterBodyPropsType) => {
    const {score, max, incButton, resButton} = props;

    return (

        <div className='wrapper'>

            <CounterDisplay
                score={score}
                max={max}
            />

            <div className="buttonsWrapper">

                <Button name={incButton.name} callback={incButton.callback} isDisabled={incButton.isDisabled}/>

                <Button name={resButton.name} callback={resButton.callback} isDisabled={resButton.isDisabled}/>

            </div>

        </div>
    );
};

export default CounterBody;