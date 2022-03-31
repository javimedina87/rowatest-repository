import { useEffect, useState } from 'react';

export default function Filter({ fixedOptions, onSelectFilterOption, selectedOptions }) {
    const [filterIsActive, setFilterIsActive] = useState(false);

    const toggleFilter = () => {
        setFilterIsActive(!filterIsActive);
    }

    useEffect(() => {
        const validateModalClick = (event) => {
            // If no children is clicking outside modal, else is touching modal options
            if(event?.target?.firstChild?.children){
                setFilterIsActive(false);
            }
        }

        document.addEventListener('mousedown', validateModalClick);
        return () => {
            document.removeEventListener('mousedown', validateModalClick);
        };
    });

    return (
        <>
            <div className="modal-open-button" onClick={toggleFilter}>
                <span>By {selectedOptions.join(' - ')}</span>
            </div>

            {filterIsActive && (
                <div className="modal">
                    <div className="modal-content">
                        {fixedOptions.map((option) => {
                            return (
                                <div
                                    className={`modal-option ${selectedOptions.includes(option) && 'modal-option-selected'}`}
                                    key={option}
                                    onClick={() => onSelectFilterOption(option)}
                                >
                                    {option}
                                </div>
                            )
                        })}
                    </div>
                </div>
            )}

            <style jsx>{`
              .modal-open-button {
                align-items: center;
                background: lightpink;
                display: flex;
                height: 5vh;
                justify-content: center;
              }

              .modal {
                align-items: center;
                background: rgba(1, 1, 1, 0.7);
                bottom: 0;
                display: flex;
                height: 100vh;
                left: 0;
                justify-content: center;
                position: absolute;
                right: 0;
                top: 0;
                width: 100vw;
              }
              
              .modal .modal-content {
                background: darkgrey;
                display: flex;
              }
              
              .modal .modal-content .modal-option {
                align-items: center;
                background: whitesmoke;
                display: flex;
                height: 15vh;
                justify-content: center;
                margin: 0.5vw;
                width: 15vw;
              }
              
              .modal .modal-content .modal-option-selected {
                background: lightsalmon;
              }
            `}</style>
        </>
    )
}