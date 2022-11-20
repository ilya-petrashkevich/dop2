import React from 'react';

type CounterDisplayPropsType = {
    score: number
    max: number
}

const CounterDisplay = (props: CounterDisplayPropsType) => {
    return (
        <div className="countWrapper">
            <div className={`countDisplay ${props.score === props.max ? 'redNum' : ''}`}><b>{props.score}</b></div>
        </div>
    );
};

export default CounterDisplay;