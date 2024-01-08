import {
  fetchPopularMovies,
  fetchTrendingMovies,
  fetchTrendingTvseries,
  fetchpopularTvseries,
  searchMovies,
} from "./MovieTmdb";
global.fetch = jest.fn();

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

describe("MovieTmdb Service", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("fetches trending TV series successfully", async () => {
    const mockResults = [{ id: 1, name: "TV Series 1" }];

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => ({ results: mockResults }),
    });

    const result = await fetchTrendingTvseries();

    expect(result).toEqual(mockResults);
    expect(global.fetch).toHaveBeenCalledWith(
      `${BASE_URL}/trending/tv/week?api_key=${API_KEY}`
    );
  });

  it("handles error when fetching trending TV series", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({ ok: false });

    await expect(fetchTrendingTvseries()).rejects.toThrow(
      "Failed to fetch trending movies"
    );
  });

  it("fetches popular TV series successfully", async () => {
    const mockResults = [{ id: 1, name: "TV Series 1" }];

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => ({ results: mockResults }),
    });

    const result = await fetchpopularTvseries();

    expect(result).toEqual(mockResults);
    expect(global.fetch).toHaveBeenCalledWith(
      `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
  });

  it("handles error when fetching popular TV series", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({ ok: false });

    await expect(fetchpopularTvseries()).rejects.toThrow(
      "Failed to fetch trending movies"
    );
  });

  it("searches for movies successfully", async () => {
    const query = "Action";
    const mockResults = [{ id: 1, title: "Movie 1" }];

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => ({ results: mockResults }),
    });

    const result = await searchMovies(query);

    expect(result).toEqual(mockResults);
    expect(global.fetch).toHaveBeenCalledWith(
      `${BASE_URL}/search/multi?query=${query}&api_key=${API_KEY}`
    );
  });

  it("handles error when searching for movies", async () => {
    const query = "Action";

    (global.fetch as jest.Mock).mockResolvedValue({ ok: false });

    await expect(searchMovies(query)).rejects.toThrow(
      "Failed to search for movies"
    );
  });
  it("fetches trending movies successfully with specific language", async () => {
    const mockResults = [{ id: 1, title: "Movie 1" }];

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => ({ results: mockResults }),
    });

    const result = await fetchTrendingMovies();

    expect(result).toEqual(mockResults);
    expect(global.fetch).toHaveBeenCalledWith(
      `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
    );
  });
  it("fetches trending TV series successfully with specific language", async () => {
    const mockResults = [{ id: 1, name: "TV Series 1" }];

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => ({ results: mockResults }),
    });

    const result = await fetchTrendingTvseries();

    expect(result).toEqual(mockResults);
    expect(global.fetch).toHaveBeenCalledWith(
      `${BASE_URL}/trending/tv/week?api_key=${API_KEY}`
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("fetches popular movies successfully", async () => {
    const mockResults = [{ id: 1, title: "Movie 1" }];

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => ({ results: mockResults }),
    });

    const result = await fetchPopularMovies();

    expect(result).toEqual(mockResults);
    expect(global.fetch).toHaveBeenCalledWith(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
  });

  it("handles error when fetching popular movies", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({ ok: false });

    await expect(fetchPopularMovies()).rejects.toThrow(
      "Failed to fetch popular movies"
    );
  });

  it("searches for TV series successfully", async () => {
    const query = "Drama";
    const mockResults = [{ id: 1, name: "TV Series 1" }];

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => ({ results: mockResults }),
    });

    const result = await searchMovies(query);

    expect(result).toEqual(mockResults);
    expect(global.fetch).toHaveBeenCalledWith(
      `${BASE_URL}/search/multi?query=${query}&api_key=${API_KEY}`
    );
  });

  it("handles error when searching for TV series", async () => {
    const query = "Drama";

    (global.fetch as jest.Mock).mockResolvedValue({ ok: false });

    await expect(searchMovies(query)).rejects.toThrow(
      "Failed to search for movies"
    );
  });
});
