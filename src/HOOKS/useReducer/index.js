import React, {useState} from 'react'

const booksData = [
    { id: 1, name: "Pather Panchal" },
    { id: 2, name: "Padma Nadir Majhi" },
    { id: 3, name: "Srikanta" }
];

const Modal = ({modalText}) => {
    return <p>{modalText}</p>;
}

const UseReducer = () => {

    const [books, setBooks] = useState( booksData );
    const [bookName, setBookName] = useState("");
    const [modalText, setModalText] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = ( e ) => {
        e.preventDefault();
        setBooks((prevState) => {
            const newBook = {id: new Date().getTime().toString(), name: bookName}
            return [...prevState, newBook];
        });
        setIsModalOpen(true);
        setModalText("Book is added");
        // setIsModalOpen(false);

    }

    return (
        <div>
            <h3>Books List</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" value={bookName} onChange={(e) => {setBookName(e.target.value);}} />
                <button type="submit">Add Book</button>
            </form>

            {isModalOpen && <Modal modalText={modalText} />}

            {books.map((book) => {
                const {id, name} = book;
                return <li key={id}>{name}</li>
            })}
        </div>
    )
}

export default UseReducer;