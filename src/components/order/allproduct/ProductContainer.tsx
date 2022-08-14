import React from 'react';
import { Route } from 'react-router-dom';

import Drinks from './productRsc/Drinks';

const ProductContainer = () => {

  return (
    <div className="bg-white grid gap-5 grid-col px-6 pt-5 ">
      <div className="pb-4 pt-5 text-bold text-3xl font-bold">Menu</div>
      <div className="text-xl font-bold pb-2">
        Best Menu
      </div>
      <hr/>
        <Drinks />
      <div className="text-xl font-bold pt-5">
        Drinks
      </div>
      <hr/>
        <Drinks />
    </div>
  );
};

export default ProductContainer;