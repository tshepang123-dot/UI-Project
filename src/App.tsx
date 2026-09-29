import { useEffect, useState } from "react";
import type { Bookmark } from "./types";
import BookmarkForm from "./Components/BookmarkForm";
import Bookmarklist from "./Components/Bookmarklist";
import "./App.css";

const STORAGE_KEY = "links-vault-bookmarks";

function App() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
  }, [bookmarks]);

  const handleAdd = (bookmark: Bookmark) => {
    setBookmarks((prev) => [bookmark, ...prev]);
  };

  const handleDelete = (id: string) => {
    setBookmarks((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">BOOKMARK VAULT</h1>
        <p className="app-subtitle">save and organize your favourite sites</p>
      </header>

      <main className="app-main">
        <BookmarkForm onAdd={handleAdd} />
        <Bookmarklist bookmarks={bookmarks} onDelete={handleDelete} />
      </main>
    </div>
  );
}

export default App;