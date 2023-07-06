import { useEffect, useState } from "react";
import { Getgifts } from "../helpers/getGift";
// import { useDebugValue } from "react";
import GifItem from "./GifItem";

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);


  const getImages = async () => {
    const newImages = await Getgifts(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
    <h3>{category}</h3>
    <div className="card-grid">
      {
        images.map((image)=>(
             <GifItem
             key={image.id}
             {...image}
             />
        ))
      }
    </div>
    </>
  );
};

export default GifGrid;
