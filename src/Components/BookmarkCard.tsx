import type { Bookmark } from "../types";

interface BookmarkCardProps {
  bookmark: Bookmark;
  onDelete: (id: string) => void;
}

function BookmarkCard({ bookmark, onDelete }: BookmarkCardProps) {
  const handleVisit = () => {
    const href = bookmark.url.startsWith("http")
      ? bookmark.url
      : `https://${bookmark.url}`;
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <article className="bookmark-card">
      <h3 className="bookmark-title">{bookmark.title}</h3>
      <p className="bookmark-url">{bookmark.url}</p>
      {bookmark.description && (
        <p className="bookmark-description">{bookmark.description}</p>
      )}

      <div className="bookmark-footer">
        <div className="tag-list">
          {bookmark.tags.map((tag) => (
            <span className="tag-badge" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <div className="bookmark-actions">
          <button className="visit-button" onClick={handleVisit}>
            Visit
          </button>
          <button
            className="delete-button"
            onClick={() => onDelete(bookmark.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </article>
  );
}

export default BookmarkCard;