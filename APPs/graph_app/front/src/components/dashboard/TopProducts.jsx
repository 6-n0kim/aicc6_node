import React, { useEffect } from "react";
import HeadTitle from "./HeadTitle";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopProducts } from "../../redux/slices/apiSlice";

const TopProducts = () => {
  const state = useSelector((state) => state.apis.topProductsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopProducts());
  }, [dispatch]);

  console.log(state);
  return (
    <div className="block-wrap w-full lg:w-auto">
      <HeadTitle title="Top Products" />
      <div className="table-products">
        <table className="md:min-w-[500px] w-full">
          <thead>
            <tr>
              <th className="tbl-title">#</th>
              <th className="tbl-title">Name</th>
              <th className="tbl-title">Popularity</th>
              <th className="tbl-title hidden lg:table-cell">Sales</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default TopProducts;
