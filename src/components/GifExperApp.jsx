import React from "react";
import { useState } from "react";
import AddCategory from "./AddCategory";
import GifGRid from "./GifGRid";

const GifExperApp = () => {
  const [categorys, setCategorys] = useState([
    "One Punch"
  ]);

  const addCategory = (newCategory) => {
    if (categorys.includes(newCategory)) return;
    setCategorys([newCategory, ...categorys]);
  };
  return (
    <>
      <h1>GifExperApp</h1>
      <AddCategory onAddCategory={addCategory} />

      {categorys.map((item) => (
        <GifGRid key={item} category={item} />
      ))}
    </>
  );
};

export default GifExperApp;
