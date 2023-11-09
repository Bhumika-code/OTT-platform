
interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  media_type: string;
}
interface Tv {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  media_type: string;
  first_air_date: string;
}
export const getBookmarks = () => {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
  return bookmarks;
};


export const toggleBookmark = (movie:Movie) => {
  const bookmarks = getBookmarks();
  const isBookmarked = bookmarks.some((b:Movie) => b.id === movie.id);

  if (isBookmarked) {
    const updatedBookmarks = bookmarks.filter((b:Movie) => b.id !== movie.id);
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  } else {
    bookmarks.push(movie);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }
};
export const getBookmarksTv = () => {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
  return bookmarks;
};
export const toggleBookmarkTv = (tv:Tv) => {
  const bookmarks = getBookmarksTv();
  const isBookmarked = bookmarks.some((b:Movie) => b.id === tv.id);

  if (isBookmarked) {
    const updatedBookmarks = bookmarks.filter((b:Movie) => b.id !== tv.id);
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  } else {
    bookmarks.push(tv);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }
};