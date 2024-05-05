import "../Earnings/style.scss";

const Earnings = () => {
  return (
    <>
      <div className="container p-5 rounded-3xl mt-20 bg-gray-200 ">
        <h1 className="text-3xl text-center text-sky-700">
          BI MUTAXASISLARINING DAROMADI QANCHA?
        </h1>
        <div className="cards p-10 flex justify-between items-center">
          <div className="card border border-gray-400 rounded-3xl p-5 w-[33%] text-center bg-white">
            <h2 className="text-2xl text-orange-500">2 000 000+</h2>
            <p className="p-2">Dunyo bo'yicha bo'sh ish o'rinlari</p>
          </div>
          <div className="card border border-gray-400 rounded-3xl p-5 w-[33%] text-center bg-white ">
            <h2 className="text-2xl text-orange-500">400 - 2 000$</h2>
            <p className="p-2">Dunyo bo'yicha bo'sh ish o'rinlari</p>
          </div>
          <div className="card border border-gray-400 rounded-3xl p-5 w-[33%] text-center bg-white">
            <h2 className="text-2xl text-orange-500">2 000 000+</h2>
            <p className="p-2">Dunyo bo'yicha bo'sh ish o'rinlari</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Earnings;

