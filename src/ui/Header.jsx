import { Link } from "react-router";
import SearchOrder from "../features/order/SearchOrder.jsx";
import Username from "../features/user/Username.jsx";

export default function Header() {
  return (
    <header className="items-center flex justify-between border-b-2 border-stone-500 bg-indigo-400 px-4 py-3 font-semibold text-stone-100 uppercase sm:px-6 ">
      <Link to={"/"} className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}
