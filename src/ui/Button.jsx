import { Link } from "react-router";

export default function Button({ children, disabled, to, type }) {
  const base =
    "focus:ring-offset-2 rounded-full bg-indigo-400 font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:bg-indigo-300 focus:ring focus:ring-indigo-300 focus:outline-none disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "focus:ring-offset-2 rounded-full border-2 border-stone-300 font-semibold tracking-wide text-stone-400 uppercase transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:ring focus:text-stone-800 focus:ring-stone-300 focus:outline-none disabled:cursor-not-allowed px-2.5 py-3 md:px-6 md:py-3.5",
  };

  if (to) {
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}
