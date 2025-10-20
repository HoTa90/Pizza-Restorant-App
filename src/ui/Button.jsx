import { Link } from "react-router";

export default function Button({ children, disabled, to, type, onClick }) {
  const base =
    "focus:ring-offset-2 text-sm rounded-full bg-indigo-400 font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:bg-indigo-300 focus:ring focus:ring-indigo-300 focus:outline-none disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-2 md:px-5 md:py-3",
    small: base + " px-3 py-1.5 md:px-4 md:py-2.5 text-xs",
    secondary:
      "focus:ring-offset-2 text-sm rounded-full border-2 border-stone-300 font-semibold tracking-wide text-stone-400 uppercase transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:ring focus:text-stone-800 focus:ring-stone-300 focus:outline-none disabled:cursor-not-allowed px-2.5 py-3 md:px-4.5 md:py-2.5",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2",
  };

  if (to) {
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className={styles[type]} disabled={disabled}>
        {children}
      </button>
    );
  }

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}
