import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";
import Search from "../../components/Search/Search";
import ProductsCard from "../../components/ProductsCard/ProductsCard";

const Home = ({ data }) => {
  console.log(data);
  console.log("testando branch home");
  console.log("testando branch teste");
  console.log("testando branch teste");
  console.log("testando branch home");
  console.log("testando branch home");
  return (
    <div className="home">
      <HeaderMenu />
      <Search />
      <div className="home__products">
        {data.map((product) => (
          <ProductsCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
