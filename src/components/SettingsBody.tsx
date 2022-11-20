import React from 'react';
import SettingsInputs from "./SettingsInputs";
import Button from "./Button";
import {ButtonDataType} from "../App";

type SettingsBodyPropsType = {
    setButton: ButtonDataType
    checkMaxInputValue: (max: number, isSetMaxChanged: boolean) => void
    checkMinInputValue: (min: number, isSetMinChanged: boolean) => void
    stateMax: number
    stateMin: number
}

const SettingsBody = (props: SettingsBodyPropsType) => {
    return (
        <div className='wrapper'>
            <SettingsInputs
                checkMaxInputValue={props.checkMaxInputValue}
                checkMinInputValue={props.checkMinInputValue}
                stateMax={props.stateMax}
                stateMin={props.stateMin}
            />

            <div className="buttonsWrapper">
                <Button name={props.setButton.name} callback={props.setButton.callback}
                        isDisabled={props.setButton.isDisabled}/>
            </div>

        </div>
    );
};

export default SettingsBody;