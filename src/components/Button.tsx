import React from 'react';

type ButtonPropsType = {
    name: string
    callback: () => void
    isDisabled: boolean
}

const Button = (props: ButtonPropsType) => {

    return (
        <button onClick={props.callback} disabled={props.isDisabled}>{props.name}</button>
    );
};

export default Button;