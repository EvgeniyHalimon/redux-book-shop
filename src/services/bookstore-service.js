export default class BookstoreService{

    data = [
        {
            id:1,
            title: 'Book_Name',
            author: 'Fabulous Hori',
            price: 35,
            coverImage: 'https://m.media-amazon.com/images/I/51Lb4J6645L._SL500_.jpg'
        },
        {
            id:2,
            title: 'Book_Name_2',
            author: 'Fabulous Jaime',
            price: 35,
            coverImage: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1550966912l/40148573._SX318_.jpg'
        },
    ]
    
    getBooks(){
        return new Promise((resolve, reject) => {
            setTimeout(() =>{
                // resolve(this.data)
                reject(new Error('Wow such problem'))
            },700)
        })
    }
}

/* {
    id:1,
    title: 'wow such book',
    author: ' doge'
},
{
    id:2,
    title: 'war crime',
    author: ' big floppa'
},
{
    id:3,
    title: 'make me hamppymn',
    author: ' cheems'
}, */