import React, {Component} from 'react';
import BookListItem from '../book-list-item';
import './book-list.css'
import {connect} from 'react-redux'
import {withBookstoreService} from '../hoc';
import { /* booksLoaded, booksRequested, booksError */ fetchBooks} from '../../actions';
import {compose} from '../../utils';
import Spinner from '../spinner/index';
import ErrorIndicator from '../error-indicator/index';

const BookList = ({books}) => {
    return(
        <ul className='book-list'>
            {
                books.map((book) => {
                    return (
                        <li key={book.id}><BookListItem book={book}/></li>
                    )
                })
            }
        </ul>
    )
}

class BookListContainer extends Component{

    componentDidMount(){
        //1. recieve data

        /* const {
            bookstoreService, 
            booksLoaded, 
            booksRequested,
            booksError
        } = this.props */

        /* const data = bookstoreService.getBooks() */

        /* booksRequested()
        bookstoreService.getBooks()
        .then(data => booksLoaded(data))
        .catch((error) => booksError(error)) */

        //2.dispatch data
        /* this.props.booksLoaded(data) */
        this.props.fetchBooks()
    }

    render(){
        const {books, loading, error} = this.props
        if(loading){
            return <Spinner/>
        }
        if(error){
            return <ErrorIndicator/>
        }
        return <BookList books={books}/>
    }
}

const mapStateToProps = ({books, loading, error}) => {
    return {books, loading, error}
}

/* const mapDispatchToProps = {
    booksLoaded,
    booksRequested,
    booksError
} */

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const mapDispatchToProps = ( /* ownProps */ dispatch, {bookstoreService}) => {
    /* const {bookstoreService} = ownProps */
    return{
        fetchBooks: fetchBooks(bookstoreService, dispatch)
    }
}


export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer)

