import logo from "../../assets/ecommerce.png";

const index = () => {
  return (
    <div className="flex flex-col justify-center h-screen font-poppins text-black">
      <div className="hidden md:flex flex-row items-center justify-center">
        <div className="flex flex-col justify-center md:ml-32">
          <h1 className="md:text-left text-center font-bold text-[25px] md:text-[36px] w-[440px]">
            Quality, Savings, and Simplicity. More Than Just Transactions!
          </h1>
          <p className="md:text-left text-center font-semibold text-xl mt-9 mb-5">
            join us now.
          </p>
          <div className="flex flex-col justify-center">
            <button className="bg-cyan-600 hover:bg-cyan-200 font-semibold h-12 w-80 rounded-full text-xl transition duration-300 ease-in-out transform text-white hover:text-black hover:scale-105">
              Login / Register
            </button>
          </div>
        </div>
        <div className="bg-cyan-200 min-h-screen w-full flex flex-col items-center justify-end">
          <img src={logo} className="mb-20 h-3/4 w-3/4" />
        </div>
      </div>
    </div>
  );
};

export default index;
