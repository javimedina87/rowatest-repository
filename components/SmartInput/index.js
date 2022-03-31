import { useState } from 'react';

export default function SmartInput ({
        initialValue = '',
        inputSize = null,
        onValueModified = null
}) {
    const [currentValue, setCurrentValue] = useState(null);
    const [valueIsBeingModifying, setValueIsBeingModifying] = useState(false);
    const [smartInputValue, setSmartInputValue] = useState(initialValue);

    const _onFocus = (event) => {
        // Save original value to input clicked. It will be compared _onBlur
        setCurrentValue(event.target?.value);
    }
    const _onChange = (event) => {
        setSmartInputValue(event.target?.value);
    }
    const _onBlur = async (event) => {
        // Original value is different to current input value
        if (currentValue !== event.target?.value) {
            try {
                setValueIsBeingModifying(true);
                await onValueModified();
            } catch {
                setSmartInputValue(currentValue);
            } finally {
                setValueIsBeingModifying(false);
            }
        }
    }

    return (
        <>
            <input className='smart-input'
                disabled={valueIsBeingModifying}
                size={inputSize}
                type='text'
                value={smartInputValue}
                onFocus={_onFocus}
                onChange={_onChange}
                onBlur={_onBlur}
            />

            <style jsx>{`
              input[type='text'].smart-input {
                padding: 8px 2px 8px 2px;
                text-align: center;
              }
              
              input[type='text']:disabled {
                background: grey;
              }
            `}</style>
        </>
    )
}