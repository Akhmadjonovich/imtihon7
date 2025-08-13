import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Products() {
  const products = useSelector((state) => state.product.products); 
  
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://json-api.uz/api/project/dessertss/desserts") 
      .then((res) => {
        setData(res.data.data);
        console.log(data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        
      });
  }, []);
  
  return (
    <div>
      <h2>Deserts</h2>
      <div className="grid">
        {data.map((p) => (
          <div className="bg-amber-50" key={p.id}>
            <img src={p.image.thumbnail} alt="" />
            <button>Add to card</button>
            <h3>{p.category}</h3>
            <h2>{p.name}</h2>
            <h4>${p.price}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
