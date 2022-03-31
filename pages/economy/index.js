import { useEffect, useState } from 'react';
import Filter from '../../components/Filter';
import { Economy } from '../mocks/economy';
import SmartInput from "../../components/SmartInput";

export default function Expenses() {
    const initialFilterOptions = ['C', 'J', 'P']; // Común, Javier, Paula
    const [filterOptionsSelected, setFilterOptionsSelected] = useState(initialFilterOptions);
    const [expenses, setExpenses] = useState(null);

    const _handleOnChangeSmartInput = (event) => {
        console.log('_handleInputChange ', event);
        console.log('event.target?.value ', event.target?.value);

        // setInputValue(event.target?.value);
    }

    const handleModalOption = (optionSelected) => {
        const index = filterOptionsSelected.indexOf(optionSelected);

        // Try to find item index in current array
        if (index > -1) {
            setFilterOptionsSelected(filterOptionsSelected.filter((item) => item !== optionSelected));
        } else {
            // Item was not in the current array, so add it to array
            setFilterOptionsSelected((oldArray) => [...oldArray, optionSelected]);
        }
    }

    useEffect(() => {
        const currentExpenses = Economy.filter((expense) => filterOptionsSelected.includes(expense.owner))

        setExpenses(currentExpenses); // TODO remove mock
    }, [filterOptionsSelected])

    return (
        <div className="container">
            <Filter
                fixedOptions={initialFilterOptions}
                selectedOptions={filterOptionsSelected}
                onSelectFilterOption={handleModalOption}
            />

            {expenses?.map((expense, index) => {
                return (
                    <div className={`expense-row ${index %2 && 'odd-expense-row'}`} key={expense.id}>
                        <SmartInput
                            initialValue={expense.amount}
                            inputSize={4} // sum total 42
                        />
                        <SmartInput
                            initialValue={expense.amount}
                            inputSize={4}
                        />
                        <SmartInput
                            initialValue={expense.amount}
                            inputSize={4}
                        />
                        <SmartInput
                            initialValue={expense.description}
                            inputSize={13}
                        />
                        <SmartInput
                            initialValue={expense.amount}
                            inputSize={4}
                        />
                        <SmartInput
                            initialValue={expense.description}
                            inputSize={13}
                        />
                    </div>
                )}
            )}
            <style jsx>{`
              .container {
                //background: lightcyan;  
              }

              .expense-row {
                background: rgba(87, 171, 235, 1);
                display: flex;
              }

              .odd-expense-row {
                //background: blue;
                background: rgba(87, 171, 235, 0.5);
              }
            `}</style>
        </div>
    )
}