import axios from "axios";
import { useState } from "react";

export default function Form() {
  const [isbn, setISBN] = useState("");
  const [engagement, setEngagement] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const dbISBN = e.target[0].value;
    const dbEngagement = e.target[1].value;

    return axios.post(
      `http://localhost:8998/checkout/${dbISBN}/${dbEngagement}`
    );
  };

  const handleText = (e) => {
    e.preventDefault();

    if (e.target.id == "isbn") {
      setISBN(e.target.value);
      if (e.target.value.length >= 10) {
        setTimeout('document.getElementById("studentid").focus()', 1000);
      }
    }

    if (e.target.id == "studentid") {
      setEngagement(e.target.value);
      if (e.target.value.length >= 16) {
        document.getElementById("submitButton").click();
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-1/3 m-auto mt-40">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Checkout a Book
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Please scan the book you would like to checkout followed by your ID.
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

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="studentid"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Student ID
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    onChange={handleText}
                    type="text"
                    name="studentid"
                    id="studentid"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Please scan your ID card"
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
          id="submitButton"
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}
