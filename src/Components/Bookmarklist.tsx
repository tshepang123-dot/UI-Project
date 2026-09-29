import type { Bookmark } from "../types";
import BookmarkCard from "./BookmarkCard";


interface BookmarkListProps {
  bookmarks: Bookmark[];
  onDelete: (id: string) => void;
}

function BookmarkList({ bookmarks, onDelete }: BookmarkListProps) {
  return (
    <section className="bookmark-list-section">
      <h2 className="list-heading">Saved Bookmarks</h2>

      {bookmarks.length === 0 ? (
        <p className="empty-state">No bookmarks saved yet.</p>
      ) : (
        <div className="bookmark-list">
          {bookmarks.map((bookmark) => (
            <BookmarkCard
              key={bookmark.id}
              bookmark={bookmark}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default BookmarkList;
