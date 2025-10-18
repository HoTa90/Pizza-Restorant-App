import { Link } from "react-router";

export default function Button({ children, disabled, to }) {
  const className =
    "focus:ring-offset-2 rounded-full bg-indigo-400 px-4 py-3 font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:bg-indigo-300 focus:ring focus:ring-indigo-300 focus:outline-none disabled:cursor-not-allowed sm:px-6 sm:py-4";
  if (to) {
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} disabled={disabled}>
      {children}
    </button>
  );
}
