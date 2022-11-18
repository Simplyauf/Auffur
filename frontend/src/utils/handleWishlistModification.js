import { store } from "../store";
import { setWishlist } from "../features/wishlistAndCartSlice";

export const handleWishlistModification = (_id, dispatch) => {
  const { allProductsData } = store.getState().productsData;
  const { wishlist } = store.getState().wishlistAndCartSection;

  let newWishlist;
  if (wishlist.find((wishlistProduct) => wishlistProduct._id === _id)) {
    const filteredWishlist = wishlist.filter((productsData) => productsData._id !== _id);
    newWishlist = [...filteredWishlist];
  } else {
    const currentWishlistedProduct = allProductsData.find((productsData) => productsData._id === _id);
    newWishlist = [...wishlist, currentWishlistedProduct];
  }
  dispatch(setWishlist(newWishlist));
};

// Check if the product id matches an id in the wishlist,if it does then that mean you are trying to delete a product by adding the other wishlisted product else add the current wishlisted product
