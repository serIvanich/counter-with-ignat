import React, {useEffect, useState} from 'react';
import './App.css';


export function Counter() {

    const [value, setValue] = useState<number>(0)

    //  localStorage method with useEFFECT
    useEffect(() => {
        const newValue = localStorage.getItem('count value')
        if (newValue) {
            setValue(JSON.parse(newValue))
        }

    },[])

    useEffect(() => {
        localStorage.setItem('count value', JSON.stringify(value))
    }, [value])

    const incHandler = () => {
        setValue(value + 1)
    }

    // localStorage method with button
//     const setToLocalStorageHandler = () => {
//         localStorage.setItem('count value', JSON.stringify(value))
//         localStorage.setItem('countValue', JSON.stringify(value * 2))
//
//
//     }
//     const getToLocalStorageHandler = () => {
//         const newValue = localStorage.getItem('count value')
//         if (newValue) {
//             setValue(JSON.parse(newValue))
//         }
//     }
//     const clearToLocalStorageHandler = () => {
//         localStorage.clear()
//     }
//     const removeToLocalStorageHandler = () => {
// localStorage.removeItem('countValue')
//     }

    return (
        <div className={'counter'}>
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
            {/*<button onClick={setToLocalStorageHandler}>setToLocalStorageHandler</button>*/}
            {/*<button onClick={getToLocalStorageHandler}>getToLocalStorageHandler</button>*/}
            {/*<button onClick={clearToLocalStorageHandler}>clearToLocalStorageHandler</button>*/}
            {/*<button onClick={removeToLocalStorageHandler}>removeToLocalStorageHandler</button>*/}
        </div>
    )
}





