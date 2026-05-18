const BookDetailsPage = async ({ params }) => {
  const { bookId } = await params;

  const res = await fetch(`http://localhost:5000/books/${bookId}`);

  const { title, author, price, category } = await res.json();

  return (
    <div>
      <h2>Book Details: {bookId}</h2>
      <p>Title: {title}</p>
      <p>Author: {author}</p>
      <p>Price: ${price}</p>
      <p>Category: {category}</p>
    </div>
  );
};

export default BookDetailsPage;
