import React from "react";

interface BookProps {
  image: string;
  title: string;
  author: string;
}

export const ReturnBook: React.FC<BookProps> = ({ image, title, author }) => {
  return (
    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
      <div className="text-center">
        <img
          src={require(`./../../../Images/BooksImages/${image}`)}
          width="151"
          height="233"
          alt="book"
        />
        <h6 className="mt-2">{title}</h6>
        <p>{author}</p>
        <a className="btn main-color text-white" href="#">
          Reserve
        </a>
      </div>
    </div>
  );
};
