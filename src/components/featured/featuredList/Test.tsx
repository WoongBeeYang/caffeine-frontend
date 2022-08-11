import React from 'react';
import { BrowserRouter, Link, Routes } from 'react-router-dom';
import data from "../featuredData";

const Test = () => {
  const dataList1 = data.filter(item => item.seq < 2)
  const dataShow1 = dataList1.map (item => (
        <div key={item.seq} className="basis-[60%]">
        <img className="" src={item.img} />
        <div className="p-5 h-[250px] text-center text-white mb-5 bg-pink-300">
          <p className="font-bold text-2xl">{item.header}</p>
          <p className='mt-5 text-xl'>{item.footer}</p>
            <button className='mt-5 rounded-3xl w-[130px] font-semibold border-white border-2 p-2'>Order Now</button>
        </div>
      </div>
  ));
  
  const dataList2 = data.filter(item => 2 <= item.seq  && item.seq < 4 )
  const dataShow2 = dataList2.map(item => (  
        <div key={item.seq} className="basis-[60%]">
          <img className="" src={item.img} />
          <div className="p-5 h-[250px] text-center text-white mb-5 bg-red-400">
            <p className="font-bold text-2xl">{item.header}</p>
            <p className='mt-5 text-xl'>{item.footer}</p>
            <button className='mt-5 rounded-3xl w-[130px] font-semibold border-white border-2 p-2'>Order now
            <Link to={`OrderNow/`} ></Link>
            </button>
          </div>
        </div>
  ));
  const dataList3 = data.filter(item => 4 <= item.seq  && item.seq < 6 )
  const dataShow3 = dataList3.map(item => (
        <div key={item.seq} className="basis-[60%]">
          <img className="" src={item.img} />
          <div className="p-5 h-[250px] text-center mb-5 bg-sky-200">
            <p className="font-bold text-2xl">{item.header}</p>
            <p className='mt-5 text-xl'>{item.footer}​</p>
            <Link to="/product" className='mt-5 rounded-3xl w-[130px] font-semibold border-black border-2 p-2'>Order now</Link>

          </div>
        </div>
  ));
  const dataList4 = data.filter(item => 6 <= item.seq  && item.seq < 8 )
  const dataShow4 = dataList4.map(item => (
    <div key={item.seq} className="basis-[60%]">
    <img className="" src={item.img} />
    <div className="p-5 h-[250px] text-center mb-5 text-white bg-green-800">
      <p className="font-bold text-2xl">{item.header}</p>
      <p className='mt-5 text-xl'>{item.footer}​</p>
      <button className='mt-5 rounded-3xl w-[130px] font-semibol border-white border-2 p-2'>Order now</button>
    </div>
  </div>
  ));

  return (
    <>
    <BrowserRouter>

        <div className="mx-auto flex max-w-[1400px] flex-col gap-10 sm:flex-row sm:items-center sm:justify-center">
          {dataShow1}
        </div>
        <div className="mx-auto flex max-w-[1400px] flex-col gap-10 sm:flex-row sm:items-center sm:justify-center">
          {dataShow2}
        </div>
        <div className="mx-auto flex max-w-[1400px] flex-col gap-10 sm:flex-row sm:items-center sm:justify-center">
          {dataShow3}
        </div>
        <div className="mx-auto flex max-w-[1400px] flex-col gap-10 sm:flex-row sm:items-center sm:justify-center">
          {dataShow4}
        </div>
      
    </BrowserRouter>
    </>
  );
};

export default Test;