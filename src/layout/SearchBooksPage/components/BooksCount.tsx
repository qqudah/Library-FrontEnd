import { useEffect, useState } from "react";

const BooksCount = () => {
  const [bookCount, setBookCount] = useState<number>(0);

  useEffect(() => {
    const fetchBooksCount = async () => {
      const baseURL: string = "http://localhost:8080/api/books/count";
      try {
        const response = await fetch(baseURL);
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const data = await response.json();
        setBookCount(data);
       
      } catch (error) {
        console.error("Failed to fetch book count:", error);
      }
    };

    fetchBooksCount();

   
  }, []);

  return (
    <>
      {bookCount}
    </>
  );
};

export default BooksCount;
