import "../afterShowcase/style.scss";

const AfterShowcase = () => {
  return (
    <div className="aftershowcase p-20">
      <div className="container flex justify-between items-center">
        <div className="card-1 border w-[30%] p-2 rounded-lg bg-slate-200">
          <h1 className="text-center p-7  bg-white text-2xl text text-orange-600 rounded-lg">
            Shartnoma asosida
          </h1>
          <p className="p-10 pb-20 text-center">
            10 oylik kursni shartnoma asosida o'qishingix mumkin
          </p>
        </div>
        <div className="card-2 border w-[30%] p-2 rounded-lg bg-slate-200">
          <h1 className=" text-center p-7  bg-white text-2xl text text-orange-600 rounded-lg ">
            Shartli Grant
          </h1>
          <p className="p-10 pb-20 text-center">
            10 oylik kursni shartnoma asosida o'qishingix mumkin
          </p>
        </div>
        <div className="card-3 border w-[30%] p-2 rounded-lg bg-slate-200">
          <h1 className=" text-center p-7  bg-white text-2xl text text-orange-600 rounded-lg ">
            100% Grant
          </h1>
          <p className="p-10 pb-20 text-center">
            10 oylik kursni shartnoma asosida o'qishingix mumkin
          </p>
        </div>
      </div>
    </div>
  );
};

export default AfterShowcase;
