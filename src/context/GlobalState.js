import { useReducer, createContext } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    transactions: [
        // { id: 1, text: 'Flower', amount: -20 },
        // { id: 2, text: 'Salary', amount: 300 },
        // { id: 3, text: 'Book', amount: -10 },
        // { id: 4, text: 'Camera', amount: 150 }
    ]
}
// Create context object
export const GlobalContext = createContext(initialState);

// Create Provider object
export const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE',
            payload: id
        })
    }

    function createTransaction(transaction) {
        dispatch({
            type: "ADD",
            payload: transaction
        })
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            createTransaction
        }}>{children}</GlobalContext.Provider>
    );
}