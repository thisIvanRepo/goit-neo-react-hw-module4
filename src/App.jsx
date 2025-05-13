import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { useCallback, useEffect, useMemo, useState } from "react";
import { getFotos } from "./components/api/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import { ModalProvider } from "./components/ModalProvider/ModalProvider";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";
// const of text from errors
const TEXT_ERROR = "Oops some error... Pls reload page!";
const INVALID_QUARY = "quary havent result...";
const NO_MORE_RESULT = "🔚 No more results to load";
// const of setting main loader
const COLOR_LOADER = "#123312";
const SPEAD_MAIN_LOADER = 2;

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [hits, setHits] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);
  const [query, setQuery] = useState("");

  const isLastPage = useMemo(() => page >= totalPage, [page, totalPage]);

  useEffect(() => {
    if (!query) return;

    const fetching = async () => {
      try {
        setIsLoading(true);
        setError(false);
        setNotFound(false);

        const photos = await getFotos(query, page);

        if (photos.total <= 0) {
          setNotFound(true);
        }

        setTotalPage(photos.total_pages);

        setHits((prev) =>
          page === 1 ? photos.results : [...prev, ...photos.results]
        );
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetching();
  }, [query, page]);

  const handleSubmit = useCallback(({ searchInput }, { resetForm }) => {
    setHits([]);
    setPage(1);
    setQuery(searchInput);
    resetForm();
  }, []);

  const handleLoadMore = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {error && <ErrorMessage textError={TEXT_ERROR} />}
      {notFound && <ErrorMessage textError={INVALID_QUARY} />}
      <ModalProvider>
        <ImageGallery hits={hits} />
        {isLoading && (
          <Loader color={COLOR_LOADER} speedMultiplier={SPEAD_MAIN_LOADER} />
        )}
        {hits.length > 0 && !isLastPage && (
          <LoadMoreBtn onClick={handleLoadMore} />
        )}
        {isLastPage && hits.length > 0 && (
          <ErrorMessage textError={NO_MORE_RESULT} />
        )}
        <ImageModal />
      </ModalProvider>
    </>
  );
}

export default App;
