import Head from "next/head";
import styles from "../styles/Home.module.css";
import "tailwindcss/tailwind.css";
import Form from "./form";
import { useEffect, useState } from "react";
import Bookentry from "./bookentry";
import { ToastContainer } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  useEffect(() => {
    injectStyle();
  }, []);
  const [checkoutView, setCheckoutView] = useState(false);
  return (
    <div>
      <ToastContainer />
      <button
        id="changeView"
        type="submit"
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={() => setCheckoutView(!checkoutView)}
      >
        {checkoutView ? "Add a Book" : "Checkout a Book"}
      </button>
      {checkoutView ? <Form /> : <Bookentry />}
    </div>
  );
}
