import { useEffect, useState } from 'react';
import Filter from '../../components/Filter';
import SmartInput from "../../components/SmartInput";

const Economy = [{
    "amount": 20,
    "amountType": "VE",
    "date": 1647085889182,
    "description": "entrada futbol",
    "id": 1,
    "owner": "J"
}, {
    "amount": 42,
    "amountType": "VE",
    "date": 1647085965795,
    "description": "peluquería",
    "id": 2,
    "owner": "P"
}, {
    "amount": 14,
    "amountType": "VE",
    "date": 1647085973119,
    "description": "compra ahorra más",
    "id": 3,
    "owner": "C"
}, {
    "amount": 169,
    "amountType": "VE",
    "date": 1647086008958,
    "description": "airpods",
    "id": 4,
    "owner": "J"
}, {
    "amount": 35,
    "amountType": "VE",
    "date": 1647087327065,
    "description": "camisa bimani",
    "id": 5,
    "owner": "P"
}, {
    "amount": 75,
    "amountType": "VE",
    "date": 1647087332385,
    "description": "entradas Izal",
    "id": 6,
    "owner": "C"
}, {
    "amount": 1150,
    "amountType": "FE",
    "date": 1647087332985,
    "description": "alquiler casa",
    "id": 7,
    "owner": "C"
}, {
    "amount": 2150,
    "amountType": "FI",
    "date": 1647087339985,
    "description": "sueldo Javier BBVA",
    "id": 8,
    "owner": "J"
}, {
    "amount": 2140,
    "amountType": "FI",
    "date": 1647087359985,
    "description": "sueldo Paula",
    "id": 9,
    "owner": "P"
}, {
    "amount": 450,
    "amountType": "VI",
    "date": 1647087499985,
    "description": "sueldo Perform Javier",
    "id": 10,
    "owner": "J"
}, {
    "amount": 14.90,
    "amountType": "FE",
    "date": 1647087999985,
    "description": "fibra optica",
    "id": 11,
    "owner": "C"
}]

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