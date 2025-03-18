import React, { useState, useEffect } from "react";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";

function App() {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false); // Đánh dấu khi dữ liệu đã được load

  useEffect(() => {
    const stored = localStorage.getItem("books");
    if (stored) {
      setBooks(JSON.parse(stored));
    }
    setIsInitialized(true); // Đánh dấu dữ liệu đã load xong
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("books", JSON.stringify(books));
    }
  }, [books, isInitialized]);

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const handleUpdateBook = (updatedBook) => {
    setBooks(books.map((b) => (b.id === updatedBook.id ? updatedBook : b)));
    setEditingBook(null);
  };

  const handleEditClick = (book) => {
    setEditingBook(book);
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter((b) => b.id !== id));
  };

  return (
    <div style={{ margin: "20px" }}>
      <h1>Quản Lý Sách</h1>
      <BookForm
        onAdd={handleAddBook}
        onUpdate={handleUpdateBook}
        editingBook={editingBook}
        setEditingBook={setEditingBook}
      />
      <BookList
        books={books}
        onEdit={handleEditClick}
        onDelete={handleDeleteBook}
      />
    </div>
  );
}

export default App;
