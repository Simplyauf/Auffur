import React from "react";
import "../index.css";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { NavTabs } from "./navTabs";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
// import { Wishlist } from "./wishlistSection";
import { toast } from "react-toastify";

export const Header = ({ setIsWishlistActive, setIsCartSectionActive, isLargeScreen }) => {
  const [isHamburgerBtnClicked, setIsHamburgerBtnClicked] = useState(false);

  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [totalProductQuantityCart, setTotalProductQuantityCart] = useState(0);
  const { allProductsData, isLoading, loadingOrErrorMessage } = useSelector((state) => state.productsData);
  const { wishlist, cart } = useSelector((state) => state.wishlistAndCartSection);

  const navigateToSearchPage = useNavigate();
  let location = useLocation();

  // SEARCH ENTER BUTTON WONT WORK WHEN THE allProducts IS LOADING OR THERE IS AN ERROR
  const handleSearching = (e) => {
    if (isLoading && loadingOrErrorMessage === "Loading") {
      toast("Hold on,while product is loading", {
        type: "warning",
        autoClose: 3000,
      });
    }
    if (isLoading && loadingOrErrorMessage !== "Loading") {
      toast("Products couldnt be loaded", {
        type: "error",
        autoClose: 3000,
      });
    } else if (allProductsData.length > 0) {
      navigateToSearchPage(
        {
          pathname: "/search",
          search: `?searchedProduct=${e.currentTarget.previousElementSibling.value}`,
        },
        {
          state: location.pathname,
        }
      );
    }
  };

  // on entering a new pathname these should be false
  useEffect(() => {
    setIsSearchClicked(false);
    setIsHamburgerBtnClicked(false);
  }, [location.pathname]);

  useEffect(() => {
    let total = 0;
    for (let key of cart) {
      total += key.quantity;
    }
    setTotalProductQuantityCart(total);
  }, [cart]);

  console.log(totalProductQuantityCart);

  return (
    <header className="h-[80px] sticky top-0 z-[1000] bg-[#ffffff]">
      <nav className="w-[100%] h-[100%] font-Roboto px-[5%] font-medium flex items-center justify-between shadow-[0px_0px_4px_0px_rgba(14,19,24,0.7)] ">
        <svg
          className="w-[35%]"
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 271.15 110.85"
        >
          <text
            className="text-[99.69px] fill-[#13213c] font-leagueGothic tracking-[-0.06em]"
            transform="translate(0 84.73)"
          >
            Auf
            <tspan class="tracking-[-0.01em]" x="79.21" y="0">
              Fur
            </tspan>
          </text>
        </svg>

        {isLargeScreen && <NavTabs />}
        <div className="flex items-center gap-4 md:basis-[25%] text-[18px]">
          <BiSearch
            className="w-6 h-6 stroke-secondaryColor stroke-1"
            onClick={() => setIsSearchClicked(!isSearchClicked)}
          />
          {isLargeScreen && (
            <div>
              <span className="">Register</span>
            </div>
          )}
          <div className="relative p-3 bg-neutralColor rounded-[50%]" onClick={() => setIsWishlistActive(true)}>
            <FiHeart className="w-6 h-6 stroke-secondaryColor" />
            <span className="absolute text-[10.8px] top-[3px] right-[3px] z-10 bg-primaryColor text-white cursor-pointer  px-1 text-center rounded-[50%]">
              {wishlist.length}
            </span>
          </div>
          <div className="relative p-3 bg-neutralColor rounded-[50%]">
            <AiOutlineShoppingCart className="w-6 h-6" onClick={() => setIsCartSectionActive(true)} />
            <span className="absolute text-[12px] top-[3px] right-[3px] z-10 bg-primaryColor text-white px-1 text-center  rounded-[50%]">
              {totalProductQuantityCart}
            </span>
          </div>
          <button className="p-3 bg-neutralColor">
            {isHamburgerBtnClicked ? (
              <IoCloseOutline className="w-6 h-6" onClick={() => setIsHamburgerBtnClicked(false)} />
            ) : (
              <GiHamburgerMenu className="w-6 h-6" onClick={() => setIsHamburgerBtnClicked(true)} />
            )}
          </button>
        </div>
      </nav>
      {isSearchClicked && (
        <div className="w-[100%] absolute top-[100%] left-0 bottom-auto searchBar h-[45px] bg-neutralColor text-[#000000]  z-50  shadow-sm shadow-secondaryColor flex">
          <input
            className="w-[85%] text-[18px] pl-6 h-[100%] bg-neutralColor border-none outline-none"
            type="search"
            name=""
            placeholder="search ..."
            id=""
          />
          <button
            className="bg-primaryColor w-[15%] h-[100%] flex justify-center items-center"
            onClick={(e) => handleSearching(e)}
          >
            <BiSearch className="w-6 h-6" fill="white" />
          </button>
        </div>
      )}
      {isHamburgerBtnClicked && <NavTabs />}
    </header>
  );
};
