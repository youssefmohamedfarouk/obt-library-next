import axios from "axios";
import { React, useState } from "react";
import { toast } from "react-toastify";

export default function Bookentry() {
  const [isbn, setISBN] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`https://library-backend-vl1m.onrender.com/books/${isbn}`)
      .then((res) => {
        toast("Book added successfully!", {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log(res);
      })
      .catch((error) => {
        if (error)
          toast("Error adding book! Please double check the ISBN.", {
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
      });
    setISBN("");
    // return createdBook;
  };

  const handleText = (e) => {
    if (e.target.id == "isbn") {
      setISBN(e.target.value);
      if (e.target.value.length >= 10) {
        setTimeout('document.getElementById("book-form").submit()', 1200);
      }
    }
  };

  return (
    <form
      id="book-form"
      onSubmit={(e) => handleSubmit(e)}
      className="w-1/3 m-auto mt-40"
    >
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Add to Library
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Please scan the book's ISBN.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="isbn"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                ISBN
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    onChange={handleText}
                    value={isbn}
                    type="text"
                    name="isbn"
                    id="isbn"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Please scan your book's ISBN"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          id="submit-book"
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}
