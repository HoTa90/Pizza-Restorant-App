import CreateUser from "../features/user/CreateUser.jsx";

function Home() {
  return (
    <div className="my-10 sm:my-16 text-center">
      <h1 className="mb-8 text-xl font-semibold text-stone-700 md:text-3xl px-4">
        The best pizza.
        <br />
        <span className="text-indigo-600">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
