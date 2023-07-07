import Navbar from "./Navbar";
import Footer from "./Footer";

const NotFound = () => {

  return (
    <>
      <Navbar />
      <div className="text-center flex justify-center">
        <img
          src={`${import.meta.env.BASE_URL}illustartion/404.jpg`}
          className="w-4/5 md:w-1/2 m-2"
          alt="NOT FOUND"
        />
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
