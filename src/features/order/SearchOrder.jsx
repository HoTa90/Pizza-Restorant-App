import { useState } from "react";
import { useNavigate } from "react-router";

export default function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="focus:ring-opacity-50 w-28 rounded-full bg-indigo-200 px-4 py-2 text-sm text-stone-800 transition-all duration-300 placeholder:text-stone-700 focus:ring focus:ring-indigo-600 focus:ring-offset-2 focus:outline-none sm:w-64 sm:focus:w-72 placeholder: text-ellipsis"
        placeholder="Search order #"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}
