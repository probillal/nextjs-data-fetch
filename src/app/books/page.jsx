import BookCard from "@/components/BookCard";

const BooksPage = async () => {
  const res = await fetch("http://localhost:5000/books", {
    next: { revalidate: 10 },
  });
  const books = await res.json();
  console.log("Books ", books);
  return (
    <div>
      <h2>Books:</h2>
      <div className="grid grid-cols-3 gap-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
