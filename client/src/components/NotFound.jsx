import Navbar from "./Navbar";

const NotFound = () => {

  return (
    <>
      <Navbar />
      <div className="text-center">
        <h1 className="text-6xl mt-10 mb-5">404</h1>
        <p className="text-xl">Oops! Page not found</p>
      </div>
    </>
  );
};

export default NotFound;
