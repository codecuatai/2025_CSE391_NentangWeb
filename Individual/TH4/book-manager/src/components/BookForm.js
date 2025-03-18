import React, { useState, useEffect } from "react";

function BookForm({ onAdd, onUpdate, editingBook, setEditingBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  // Khi editingBook thay đổi, cập nhật giá trị form
  useEffect(() => {
    if (editingBook) {
      setTitle(editingBook.title);
      setAuthor(editingBook.author);
      setYear(editingBook.year);
    } else {
      setTitle("");
      setAuthor("");
      setYear("");
    }
  }, [editingBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !year) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    if (editingBook) {
      // Cập nhật sách
      onUpdate({
        ...editingBook,
        title,
        author,
        year: parseInt(year, 10),
      });

      // Reset form sau khi cập nhật
      setEditingBook(null);
    } else {
      // Thêm sách mới
      const newBook = {
        id: Date.now(),
        title,
        author,
        year: parseInt(year, 10),
      };
      onAdd(newBook);
    }

    // Reset form sau khi submit
    setTitle("");
    setAuthor("");
    setYear("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h2>{editingBook ? "Sửa Sách" : "Thêm Sách"}</h2>
      <div>
        <label>Tiêu đề: </label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Tác giả: </label>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>
      <div>
        <label>Năm XB: </label>
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>
      <button type="submit">{editingBook ? "Cập nhật" : "Thêm"}</button>
      {editingBook && (
        <button
          className="huy"
          type="button"
          onClick={() => setEditingBook(null)}
        >
          Hủy
        </button>
      )}
    </form>
  );
}

export default BookForm;
