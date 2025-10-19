import { Outlet, useNavigation } from "react-router";
import CartOverview from "../features/cart/CartOverview.jsx";
import Header from "./Header.jsx";
import LoadingComp from "./LoadingComp.jsx";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] bg-stone-100 text-stone-800">
      {isLoading && <LoadingComp />}
      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}
