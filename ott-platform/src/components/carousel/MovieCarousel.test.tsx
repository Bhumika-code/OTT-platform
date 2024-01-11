import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MovieCarousel from "./MovieCarousel";

const mockData = [
  {
    id: 1,
    title: "jawan",
    poster_path: "/poster1.jpg",
    release_date: "2022-01-01",
    media_type: "movie",
  },
];

test("List renders successfully", () => {
  render(
    <BrowserRouter>
      <MovieCarousel movies={mockData} />
    </BrowserRouter>
  );

  const elements = screen.getAllByText(/jawan/i);
  expect(elements).toHaveLength(2);
});

test("Renders correctly without buttons", () => {
  render(
    <BrowserRouter>
      <MovieCarousel movies={mockData} showButtons={false} />
    </BrowserRouter>
  );

  const movieTitle = screen.getByText(/jawan/i);
  const bookmarkButton = screen.queryByAltText("bookmarked");

  expect(movieTitle).toBeInTheDocument();

  expect(bookmarkButton).toBeNull();
});
test("Adjusts display on window resize", () => {
  render(
    <BrowserRouter>
      <MovieCarousel movies={mockData} />
    </BrowserRouter>
  );

  global.innerWidth = 500;
  fireEvent(window, new Event("resize"));
});
// test("Clicking bookmark icon toggles bookmark status", async () => {
//   render(
//     <BrowserRouter>
//       <MovieCarousel movies={mockData} />
//     </BrowserRouter>
//   );

//   const bookmarkButtons = screen.queryAllByAltText("bookmarked");
//   expect(bookmarkButtons.length).toBe(2);

//   fireEvent.click(bookmarkButtons[0]);

//   await waitFor(() => {
//     const updatedBookmarkButtons = screen.queryAllByAltText("bookmarked");
//     console.log("Updated bookmark buttons:", updatedBookmarkButtons);
//     expect(updatedBookmarkButtons.length).toBe(1);
//   });
// });
