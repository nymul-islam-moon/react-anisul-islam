import React, { useState, useReducer } from 'react'
import booksData from './booksData.json';

const Modal = ({modalText}) => {
    return <p>{modalText}</p>;
}
const reducer = ( state, action ) => {
    //action.type, action.payload
    if ( action.type === "ADD" ) {
        const allBooks = [ ...state.books, action.payload ];
        return {
            ...state,
            books: allBooks,
            isModalOpen: true,
            modalText: "Book is added",
        };
    }
    // if ( action.type === "REMOVE" ) {}
    return state;
};
const UseReducer = () => {
    const [ bookState, dispatch ] = useReducer( reducer, {
        books: booksData,
        isModalOpen: false,
        modalText: "",
    });
    const [bookName, setBookName] = useState("");
    const handleSubmit = ( e ) => {
        e.preventDefault();
        const newBook = {id: new Date().getTime().toString(), name: bookName};
        dispatch({type: "ADD", payload: newBook})
        setBookName("");
    };
    return (
        <div>
            <h3>Books List</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" value={bookName} onChange={(e) => {setBookName(e.target.value);}} />
                <button type="submit">Add Book</button>
            </form>
            {bookState.isModalOpen && <Modal modalText={bookState.modalText} />}
            {bookState.books.map((book) => {
                const {id, name} = book;
                return <li key={id}>{name}</li>
            })}
        </div>
    )
}
export default UseReducer;