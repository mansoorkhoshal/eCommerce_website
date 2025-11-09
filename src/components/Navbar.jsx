import { useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [modalType, setModalType] = useState("login");

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => setIsVisible(true), 10);
  };

  const closeModal = () => {
    setIsVisible(false);
    setTimeout(() => setIsModalOpen(false), 300);
  };

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-none py-3">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="flex">
            <h1
              className="text-2xl md:text-3xl font-bold font-Garamond text-neutral-700 cursor-pointer"
              id="home"
            >
              MA
            </h1>
          </div>

          <div className="hidden md:block w-150 max-w-2xl mx-auto">
            <form className="flex items-stretch bg-white rounded-4xl shadow-xl border border-neutral-300 overflow-hidden text-xl">
              <FaSearch className="ml-5 mt-4 cursor-pointer text-neutral-400" />
              <input
                type="text"
                placeholder="Search in Products"
                className="flex-1 min-w-0 px-4 py-3 text-neutral-500 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-white transition"
              />
              <button
                type="submit"
                className="shrink-0 bg-blue-900 text-white font-semibold px-6 py-3 hover:bg-blue-700 duration-300 focus:outline-none transition cursor-pointer"
              >
                Search
              </button>
            </form>
          </div>

          <div className="md:hidden flex-1 mx-4">
            <form className="flex items-center bg-white rounded-full shadow-lg border border-neutral-300 overflow-hidden">
              <FaSearch className="ml-3 text-neutral-400" />
              <input
                type="text"
                placeholder="Search"
                className="flex-1 px-3 py-2 text-sm text-neutral-500 placeholder-neutral-400 focus:outline-none"
              />
            </form>
          </div>

          <div className="flex gap-2 md:gap-3 text-2xl md:text-4xl text-blue-950 items-center">
            <IoMdHeartEmpty className="cursor-pointer hover:text-blue-700 duration-200 rounded-full p-1 bg-blue-100" />
            <FiShoppingBag className="cursor-pointer hover:text-blue-700 duration-200 bg-blue-100 rounded-full p-1" />
            <FaRegUser
              className="cursor-pointer hover:text-blue-700 duration-200 bg-blue-100 rounded-full p-1"
              onClick={openModal}
            />
          </div>
        </div>
      </nav>

      {isModalOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-blur-sm transition-opacity duration-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleOutsideClick}
        >
          <div
            className={`bg-white rounded-lg shadow-lg p-6 max-w-sm w-full mx-4 relative transition-all duration-300 ${
              isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-neutral-500 hover:text-neutral-700 text-xl"
            >
              &times;
            </button>

            <div className="flex justify-center mb-4">
              <button
                onClick={() => setModalType("login")}
                className={`px-4 py-2 font-medium ${
                  modalType === "login"
                    ? "text-blue-900 border-b-2 border-blue-900"
                    : "text-neutral-500"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setModalType("signup")}
                className={`px-4 py-2 font-medium ${
                  modalType === "signup"
                    ? "text-blue-900 border-b-2 border-blue-900"
                    : "text-neutral-500"
                }`}
              >
                Sign Up
              </button>
            </div>

            <h2 className="text-xl font-bold mb-4 text-center">
              {modalType === "login" ? "Sign In" : "Sign Up"}
            </h2>

            <div className="mt-4">
              {modalType === "login" ? (
                <form className="flex flex-col gap-3">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="mt-2 w-full bg-blue-900 text-white py-2 rounded-lg font-medium hover:bg-blue-800 transition"
                  >
                    Sign in
                  </button>
                  <div className="text-center text-sm text-neutral-500 mt-3">
                    <button
                      type="button"
                      onClick={() => {
                        alert("Open forgot password flow");
                      }}
                      className="underline"
                    >
                      Forgot password?
                    </button>
                  </div>
                </form>
              ) : (
                <form className="flex flex-col gap-3">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="mt-2 w-full bg-blue-900 text-white py-2 rounded-lg font-medium hover:bg-blue-800 transition"
                  >
                    Sign Up
                  </button>
                  <div className="text-center text-sm text-neutral-500 mt-3">
                    <button
                      type="button"
                      onClick={() => setModalType("login")}
                      className="underline"
                    >
                      Already have an account? Sign in
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
