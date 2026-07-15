import axios from "axios";
import { Header } from "../../components/Header";
import "./HomePage.css";
import { useEffect, useState } from "react";
import { Product } from "../../components/Product";

export function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);

  // fetch('http://localhost:3000/api/products').then((response) => {
  //   response.json().then((data) => {
  //     console.log(data)
  //   })
  // })

  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    };
    getHomeData();
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>
      <Header cart={cart} />
      <div className="home-page">
        <div className="products-grid">
          {products.map((product) => {
            return (
              <Product key={product.id} product={product} loadCart={loadCart} />
            );
          })}
        </div>
      </div>
    </>
  );
}
