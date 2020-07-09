import { baseUrl } from "../config";

export const LOAD_REVIEWS = "flash/productData/LOAD_REVIEWS";

const loadReviews = (list) => ({ type: LOAD_REVIEWS, list });

export const fetchReviews = (id) => async (dispatch) => {
  const res = await fetch(`${baseUrl}/api/reviews/${id}`);

  if (res.ok) {
    const list = await res.json();
    dispatch(loadReviews(list));
  }
};
