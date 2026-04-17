import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setProducts,
  setError,
  setLoading,
} from "../store/actions/productActions";
import { getProducts } from "../services/productService.js";

const useGetProducts = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  // FetchData from Firestore
  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(setLoading(true));
      try {
        const data = await getProducts();
        dispatch(setProducts(data));
      } catch (error) {
        dispatch(setError(error.message));
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchProducts();
  }, [dispatch]);
  return { products, loading, error };
};

export default useGetProducts;
