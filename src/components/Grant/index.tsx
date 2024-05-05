import "./style.scss"

const Grant = () => {
  return (
    <div className="grant pt-[100px] mt-[50px]">
      <div className="container border flex justify-between bg-rose-500 rounded-3xl">
        <div className="right w-[59%] flex flex-wrap  text-white ">
          <h1 className="text-5xl p-5">Grantni qo'lga kiriting! </h1>
          <p className=" p-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem,
            obcaecati esse minima deleniti ut, sapiente voluptatem sit ullam
            nobis quo voluptate distinctio deserunt rerum beatae? Totam dolorum
            nobis doloremque delectus?
          </p>
          <div className="p-5">
            <button className="p-3 w-[300px] border border-white text-xl rounded-full">
              Ro'yxatdan O'ting
            </button>
          </div>
        </div>
        <div className="left w-[40%]">
          <img
            src="https://img.freepik.com/premium-photo/trophies-winner-matte-golden-cup-pink-background_124507-58412.jpg"
            alt=""
            className=" rounded-3xl h-[320px] bg-rose-500 "
          />
        </div>
      </div>
    </div>
  );
}

export default Grant;
