import { useState } from 'react';

export default function SmartInput ({ initialValue = '', inputSize = null }) {
    const [smartInputValue, setSmartInputValue] = useState(initialValue);
    const _onChange = (event) => {
        setSmartInputValue(event.target?.value);
    }
    const _onBlur = (event) => {
        console.log('_onBlur event', event);
    }

    return (
        <>
            <input className="smart-input"
                size={inputSize}
                type='text'
                value={smartInputValue}
                onChange={_onChange}
                onBlur={_onBlur}
            />

            <style jsx>{`
              .smart-input {
                padding: 8px 2px 8px 2px;
              }
            `}</style>
        </>
    )
}