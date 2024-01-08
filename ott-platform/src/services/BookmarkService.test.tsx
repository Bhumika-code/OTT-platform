import {
  getBookmarks,
  toggleBookmark,
  getBookmarksTv,
  toggleBookmarkTv,
} from "../services/BookmarkService";

describe("BookmarkService", () => {
  const movie1 = {
    id: 1,
    title: "Movie 1",
    poster_path: "/poster1.jpg",
    release_date: "2022-01-01",
    media_type: "movie",
  };
  const movie2 = {
    id: 2,
    title: "Movie 2",
    poster_path: "/poster2.jpg",
    release_date: "2022-02-01",
    media_type: "movie",
  };

  const tv1 = {
    id: 1,
    title: "TV Show 1",
    poster_path: "/tvposter1.jpg",
    first_air_date: "2022-01-01",
    media_type: "tv",
    release_date: "2022-01-01",
  };
  const tv2 = {
    id: 2,
    title: "TV Show 2",
    poster_path: "/tvposter2.jpg",
    first_air_date: "2022-02-01",
    media_type: "tv",
  };

  beforeEach(() => {
    localStorage.clear();
  });

  describe("getBookmarks", () => {
    it("returns an empty array when no bookmarks are stored", () => {
      const bookmarks = getBookmarks();
      expect(bookmarks).toEqual([]);
    });

    it("returns stored bookmarks", () => {
      const initialBookmarks = [movie1, movie2];
      localStorage.setItem("bookmarks", JSON.stringify(initialBookmarks));

      const bookmarks = getBookmarks();
      expect(bookmarks).toEqual(initialBookmarks);
    });
  });

  describe("toggleBookmark", () => {
    it("adds a movie to bookmarks if not already bookmarked", () => {
      toggleBookmark(movie1);
      const bookmarks = getBookmarks();
      expect(bookmarks).toEqual([movie1]);
    });

    it("removes a movie from bookmarks if already bookmarked", () => {
      localStorage.setItem("bookmarks", JSON.stringify([movie1, movie2]));

      toggleBookmark(movie1);
      const bookmarks = getBookmarks();
      expect(bookmarks).toEqual([movie2]);
    });
  });

  describe("getBookmarksTv", () => {
    it("returns an empty array when no TV shows are stored", () => {
      const bookmarks = getBookmarksTv();
      expect(bookmarks).toEqual([]);
    });

    it("returns stored TV shows bookmarks", () => {
      const initialBookmarks = [tv1, tv2];
      localStorage.setItem("bookmarks", JSON.stringify(initialBookmarks));

      const bookmarks = getBookmarksTv();
      expect(bookmarks).toEqual(initialBookmarks);
    });
  });

  describe("toggleBookmarkTv", () => {
    it("adds a TV show to bookmarks if not already bookmarked", () => {
      toggleBookmarkTv(tv1);
      const bookmarks = getBookmarksTv();
      expect(bookmarks).toEqual([tv1]);
    });

    it("removes a TV show from bookmarks if already bookmarked", () => {
      localStorage.setItem("bookmarks", JSON.stringify([tv1, tv2]));

      toggleBookmarkTv(tv1);
      const bookmarks = getBookmarksTv();
      expect(bookmarks).toEqual([tv2]);
    });
  });
});
