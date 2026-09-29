import { useState, type FormEvent } from "react";
import type { Bookmark } from "../types";

interface BookmarkFormProps {
  onAdd: (bookmark: Bookmark) => void;
}

function BookmarkForm({ onAdd }: BookmarkFormProps) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [tagsInput, setTagsInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !url.trim()) return;

    const tags = tagsInput
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);

    const newBookmark: Bookmark = {
      id: crypto.randomUUID(),
      title: title.trim(),
      url: url.trim(),
      description: description.trim() || undefined,
      tags,
    };

    onAdd(newBookmark);

    setTitle("");
    setUrl("");
    setDescription("");
    setTagsInput("");
  };

  return (
    <form className="bookmark-form" onSubmit={handleSubmit}>
      <h2 className="form-heading">Add New Bookmarks</h2>

      <label className="field-label" htmlFor="title">
        Title:
      </label>
      <input
        id="title"
        className="field-input"
        type="text"
        placeholder="Enter Tittle"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label className="field-label" htmlFor="url">
        Link URL:
      </label>
      <input
        id="url"
        className="field-input"
        type="text"
        placeholder="Enter Link"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <label className="field-label" htmlFor="description">
        Description(Optional)
      </label>
      <textarea
        id="description"
        className="field-input field-textarea"
        placeholder="Enter a brief Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label className="field-label" htmlFor="tags">
        Tags(Optional)
      </label>
      <input
        id="tags"
        className="field-input"
        type="text"
        placeholder="Enter tags"
        value={tagsInput}
        onChange={(e) => setTagsInput(e.target.value)}
      />

      <button type="submit" className="save-button">
        Save Bookmark
      </button>
    </form>
  );
}

export default BookmarkForm;
