import React, {Component} from 'react';
import BookListItem from '../book-list-item';
import './book-list.css'
import {connect} from 'react-redux'
import {withBookstoreService} from '../hoc';
import { booksLoaded, booksRequested } from '../../actions';
import {compose} from '../../utils';
import Spinner from '../spinner/index';

class BookList extends Component{

    componentDidMount(){
        //1. recieve data
        const {bookstoreService, booksLoaded, booksRequested} = this.props
        /* const data = bookstoreService.getBooks() */
        booksRequested()
        bookstoreService.getBooks().then(data => booksLoaded(data))

        //2.dispatch data
        /* this.props.booksLoaded(data) */
    }

    render(){
        const {books, loading} = this.props
        if(loading){
            return <Spinner/>
        }
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
}

const mapStateToProps = ({books, loading}) => {
    return {books, loading}
}

const mapDispatchToProps = {
    booksLoaded,
    booksRequested
}

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList)

