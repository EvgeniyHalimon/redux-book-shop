import React from 'react';
import BookList from '../book-list/book-list';

const HomePage = () => {
    const books = [
        {
            id:1,
            title: 'Book_Name',
            author: 'Fabulous Hori'
        },
        {
            id:2,
            title: 'Book_Name_2',
            author: 'Fabulous Jaime'
        },
    ]

    return <BookList books={books}/>
}

export default HomePage