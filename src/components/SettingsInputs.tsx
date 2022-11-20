import React, {ChangeEvent, useState} from 'react';

type SettingsInputsPropsType = {
    checkMaxInputValue: (max: number, isSetMaxChanged: boolean) => void
    checkMinInputValue: (min: number, isSetMinChanged: boolean) => void
    stateMax: number
    stateMin: number

}

const SettingsInputs = (props: SettingsInputsPropsType) => {
    //тут наверное надо вводить меременные для макс и мин и потомуже передавать и проверять на совпадение или по евенту онченджа разблочить кнопку сет

    const [localInputMax, setLocalInputMax] = useState(props.stateMax);
    const [localInputMin, setLocalInputMin] = useState(props.stateMin);
    //тут наверное надо функцией с App.tsx надо ловить сам эвент изменения в импутах и по нему раздизэйбливать кнопку SET, а по нажатию кнопки SET обратно её задизэйбливать
    const changeInputMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.bubbles)
        setLocalInputMax(+e.currentTarget.value);
        props.checkMaxInputValue(+e.currentTarget.value, !!e);
    }

    const changeInputMinHandler = (e: ChangeEvent<HTMLInputElement>) => {

        setLocalInputMin(+e.currentTarget.value);
        props.checkMinInputValue(+e.currentTarget.value, e.bubbles); //e.currentTarget ? true : false
    }

    return (
        <div className="countWrapper">

            <div className="inputWrapper">
                <span className="settingsInputTitle">max value</span>
                <input value={localInputMax} type="number" onChange={e => changeInputMaxHandler(e)}/>
            </div>
            <div className="inputWrapper">
                <span className="settingsInputTitle">min value</span>
                <input value={localInputMin} type="number" onChange={e => changeInputMinHandler(e)}/>
            </div>

        </div>
    );
};

export default SettingsInputs;