import React, { useState } from 'react';
import style from './FeaturedStyle.module.css';



const OrderNow = () => {
  const [size, setSize] = useState<string | null>();
  const [selectsize , setSelectsize] = useState("8px");
  const [count, setCount] = useState(0);
  
  const plus = () => {
    setCount(count+1);
  }

  const minus = () => {
    setCount((count) => (count <= 0 ? 0 : count -1));
  }

  const clickbtn = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setSize(e.target.value)
    if(e.target.value === 'Tall'){
      setSelectsize("8px");
    }else if(e.target.value === 'Grande'){
      setSelectsize("80px");
    }else if(e.target.value === 'Venti'){
      setSelectsize("152px");
    }else if(e.target.value === 'Trenta'){
      setSelectsize("224px");
    }
  }

  return (
    <>
      <div className="flex flex-col gap-10 lg:flex-row ">
        <div className='h-full w-full bg-[#1f3933]'>
          <div className='lg:mr-[100px] h-full flex lg:flex-row flex-col justify-center'>
            <img className='h-[200px] lg:my-auto my-5 w-[50px] min-w-[200px] lg:mx-[99px] mx-auto' src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2Fc1%2Fd3%2F45%2Fc1d34538d187fe7c375d0a1407800194.jpg&type=sc960_832"/>
            <div className='font-extrabold lg:my-auto items-center  text-white'>
              <div className='mx-auto lg:w-[400px] items-center w-80 my-10 lg:text-start text-center  justify-center text-4xl'>
                <p>DROP Coffee</p>
              </div>
              <div className='mb-5 lg:mx-0 mx-auto lg:w-[450px] w-80 lg:font-normal font-semibold lg:text-2xl text-center text-gray-400'>
                <span>동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col gap-10 lg:flex-row lg:mx-[70px]">
        <div className='my-10 lg:mx-[150px] mx-auto'>
          <img className='lg:min-w-[500px] lg:min-h-[500px] w-[400px]' src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fdnvefa72aowie.cloudfront.net%2Forigin%2Farticle%2F202207%2FBD21914A2E3300AF9A241AEF915AE6B47E21CE8AAB402DA1BF4E07BE51CA7BA7.jpg%3Fq%3D95%26s%3D1440x1440%26t%3Dinside&type=sc960_832"/>
          <div className="flex-grow max-w-[420px] mr-auto ml-auto lg:mr-6 lg:ml-1 block">
          <h2 className="mb-5 font-semibold text-[1.2rem] md:text-[1.6rem]">
            <span className="relative px-2 pb-3 block after:bg-[#d4e9e2] after:rounded-xl after:bottom-0 after:h-[4px] after:absolute after:w-full after:left-0">Size options</span> 
          </h2>
          <form className="mb-[3.2rem!important] text-center block p-0">
            <fieldset>
              <div className="inline-block px-0 my-3 relative w-[72px] h-[104px] text-left m-0 align-top">
                <div style={{marginLeft : selectsize }} className="sizeBtn absolute bg-[#d4e9e2] border-[#006241] border-[2px] h-[56px] w-[56px] z-[-1] rounded-[50%] opacity-100 transition-all duration-300 ease-in-out delay-[0]"></div>
                <label>
                  <input className="appearance-none h-[104px] absolute w-[72px] top-0 z-[-1]" id="Tall" name="size" type="radio" value="Tall" checked={size === "Tall"} onChange={clickbtn}/>
                  <div className="cursor-pointer mx-6 my-2 w-[24px] h-[40px] bg-[url(https://www.starbucks.com/app-assets/76b8892b0db8f5d411988fe1bbbe4141.svg)] "></div>
                  <p className="text-base text-center font-semibold">Tall</p>
                  <p className="text-sm text-center"> 12 fl oz</p>
                </label>
              </div>
              <div className="inline-block px-0 my-3 relative w-[72px] h-[104px] text-left m-0 align-top">
                <label>
                  <input className="appearance-none h-[104px] absolute w-[72px] top-0 z-[-1]" id="Grande" name="size" type="radio" value="Grande" checked={size === "Grande"} onChange={clickbtn}/>
                  <div className="cursor-pointer mx-6 my-2 w-[24px] h-[40px] bg-[url(https://www.starbucks.com/app-assets/2920fb2a8c34d3ddb95ad262872526e9.svg)] "></div>
                  <p className="text-base text-center font-semibold">Grande</p>
                  <p className="text-sm text-center"> 16 fl oz</p>
                </label>
              </div>
              <div className="inline-block px-0 my-3 relative w-[72px] h-[104px] text-left m-0 align-top">
                <label>
                  <input className="appearance-none h-[104px] absolute w-[72px] top-0 z-[-1]" id="Venti" name="size" type="radio" value="Venti" checked={size === "Venti"} onChange={clickbtn}/>
                  <div className="cursor-pointer mx-6 my-2 w-[24px] h-[40px] bg-[url(https://www.starbucks.com/app-assets/55e7819f7cf8e1959ec35e680d46d9a9.svg)]"></div>
                  <p className="text-base text-center font-semibold">Venti</p>
                  <p className="text-sm text-center"> 24 fl oz</p>
                </label>
              </div>
              <div className="inline-block px-0 my-3 relative w-[72px] h-[104px] text-left m-0 align-top">
                <label>
                  <input className="appearance-none h-[104px] absolute w-[72px] top-0 z-[-1]" id="Trenta" name="size" type="radio" value="Trenta" checked={size === "Trenta"} onChange={clickbtn}/>
                  <div className="cursor-pointer mx-6 my-2 w-[24px] h-[40px] bg-[url(https://www.starbucks.com/app-assets/3abf3fc78365ef0b59bbfd0ecd1c8490.svg)]"></div>
                  <p className="text-base text-center font-semibold">Trenta</p>
                  <p className="text-sm text-center"> 30 fl oz</p>
                </label>
              </div>
            </fieldset>
          </form>
            <div className="pb-14">
              <div className='sm:w-full text-center w-[300px] mx-auto'>
                <p>남산위에 저 소나무 철갑을 두른듯 바람서리 불변함은 우리 기상일세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세</p>
              </div>
              <div className='mt-5'>
                <div className="flex items-center mx-auto">
                  <svg className="text-gray-500 mr-3 w-[24px] h-[24px] overflow-visible	fill-current">
                    <path d="M11.508 19.22c-.667-.918-1.335-1.888-1.956-2.863-.432-.676-.826-1.33-1.175-1.956-1.037-1.857-1.617-3.357-1.617-4.308 0-2.984 2.297-5.31 5.24-5.31s5.24 2.326 5.24 5.31c0 .95-.58 2.45-1.617 4.31-.35.624-.743 1.28-1.175 1.955-.62.975-1.29 1.945-1.956 2.864-.174.24-.34.465-.492.67-.153-.205-.318-.43-.492-.67zm6.732-9.128c0-3.533-2.743-6.31-6.24-6.31-3.497 0-6.24 2.777-6.24 6.31 0 1.173.628 2.796 1.744 4.796.36.644.763 1.315 1.204 2.007.634.993 1.312 1.98 1.99 2.913.238.327.458.625.656.887l.252.33c.2.256.588.256.788 0l.252-.33c.198-.262.418-.56.656-.887.678-.934 1.356-1.92 1.99-2.913.44-.692.845-1.363 1.204-2.007 1.116-2 1.744-3.623 1.744-4.796z"></path>
                    <path d="M12 13.425c1.592 0 2.88-1.303 2.88-2.908s-1.288-2.91-2.88-2.91c-1.592 0-2.88 1.305-2.88 2.91 0 1.605 1.288 2.908 2.88 2.908zm0-1c-1.037 0-1.88-.853-1.88-1.908 0-1.056.843-1.91 1.88-1.91s1.88.854 1.88 1.91c0 1.055-.843 1.908-1.88 1.908z"></path>
                  </svg> 
                  <p className="text-gray-500">서울 특별시 중구 중구 중구 중구</p>
                </div>
                <div className="flex items-center mx-auto">
                  <img className='ml-1 mr-3 w-4 ' src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2016/png/iconmonstr-instagram-11.png&r=138&g=138&b=138"></img>
                  <p className="text-gray-500">https://www.instagram.com/yangwoongbee/</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full lg:my-10 lg:mx-0 mx-auto mb-10'>
          <h2 className="mb-5 lg:w-[600px] w-[500px] lg:mx-0 mx-auto font-semibold text-[1.2rem] md:text-[1.6rem]">
            <span className="relative px-2 pb-3 block after:bg-[#d4e9e2] after:rounded-xl after:bottom-0 after:h-[4px] after:absolute after:w-full after:left-0">Recommend Menu</span> 
          </h2>
          <div className='flex lg:flex-row items-center lg:justify-start justify-center sm:gap-20'>
              <img className='w-[150px] h-[150px] sm:mx-0 mx-auto lg:rounded-full' src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAyMjFfMTk3%2FMDAxNjQ1NDIwMTQxNDcy.sLG1bvlwCxnepYWJAfxl-ThjVBdn9uyUv1ta3xcPiGkg.aaC0rjVctlb1Fu30NzxYxNrUBNv12j1lsZ32LyB4Anog.JPEG.jang2721%2FIMG_3650.jpg&type=sc960_832"></img>
              <div className='lg:my-3 sm:mx-0 mx-auto'>
                <div className='lg:ml-5 lg:text-2xl text-xl font-bold mx-auto'>
                  <p>i don't Know</p>
                </div>
                <div className="lg:ml-5 my-2 text-base text-gray-600">
                  <p>15000$</p>
                </div>
                <button className='lg:ml-5 w-7 border border-black' onClick={plus}>+</button>
                <input className={`border-t border-b w-12 text-center border-black ${style}`} type="number" value={count}/>
                <button className='border w-7 border-black' onClick={minus}>-</button>
              </div>
          </div>
          
          <div className='mt-14 flex lg:flex-row items-center lg:justify-start justify-center sm:gap-20'>
              <img className='w-[150px] h-[150px] sm:mx-0 mx-auto lg:rounded-full' src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAyMjFfMTk3%2FMDAxNjQ1NDIwMTQxNDcy.sLG1bvlwCxnepYWJAfxl-ThjVBdn9uyUv1ta3xcPiGkg.aaC0rjVctlb1Fu30NzxYxNrUBNv12j1lsZ32LyB4Anog.JPEG.jang2721%2FIMG_3650.jpg&type=sc960_832"></img>
              <div className='lg:my-3 sm:mx-0 mx-auto'>
                <div className='lg:ml-5 lg:text-2xl text-xl font-bold mx-auto'>
                  <p>i don't Know</p>
                </div>
                <div className="lg:ml-5 my-2 text-base text-gray-600">
                  <p>15000$</p>
                </div>
                <button className='lg:ml-5 w-7 border border-black' onClick={plus}>+</button>
                <input className={`border-t border-b w-12 text-center border-black ${style}`} type="number" value={count}/>
                <button className='border w-7 border-black' onClick={minus}>-</button>
              </div>
          </div>
        </div>        
      </div>
    </>
  );
};

export default OrderNow;