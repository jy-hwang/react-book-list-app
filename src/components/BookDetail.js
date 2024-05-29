import React from 'react'
import formatAuthors from '../helpers/formatAuthors'

const BookDetail = ({ book }) => {

  const IMG_BASE_URL = `http://books.google.com/books`
  console.log('bookDetail : ', book);
  return (
    <section>
      <div>
        <img
          alt={`${book.volumeInfo.title} book`}
          src={`${IMG_BASE_URL}/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
        />
        <div>
          <h3>
            <strong>책 이름 : </strong>{book.volumeInfo.title}
          </h3>
          <p>
            <strong>저자 : </strong>{formatAuthors(book.volumeInfo.authors)}
          </p>
          <p>
            <strong>출판 날짜 : </strong>{book.volumeInfo.publishedDate}
          </p>
          <p>
            <strong>출판사 : </strong>{book.volumeInfo.publisher}
          </p>
          <p>
            <strong>책 페이지 수 : </strong>{book.volumeInfo.pageCount}
          </p>
          <div dangerouslySetInnerHTML={{ __html: book.volumeInfo.description }} />
        </div>
      </div>
    </section>
  )
}

export default BookDetail
