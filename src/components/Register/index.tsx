import "./style.scss"

const Register = () => {
  return (
    <div className="register mt-[150px]">
      <div className="container flex justify-between items-center p-5 bg-slate-200 rounded-3xl">
        <div className="left w-[39%] ">
          <h1 className="text-3xl">
            MAAB ACADEMY BILAN BI KELAJAGINGIZNI OCHING! HOZIR RO'YXATDAN OTING
          </h1>
          <p className="pt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, ea!
          </p>
        </div>
        <div className="right w-[59%] bg-white p-4 rounded-3xl text-xl">
          <h2>Kursga yozilish</h2>

          <form
            action=""
            className="w-[100%] pt-5 flex flex-wrap justify-between items-center gap-3"
          >
            <label htmlFor="" className="w-[49%]">
              Ismingiz <br />
              <input
                type="text"
                placeholder="Abbos"
                className="bg-slate-200 rounded-2xl p-2 w-[100%]"
              />
            </label>

            <label htmlFor="" className="w-[49%]">
              Telefon raqamingiz
              <br />
              <input
                type="number"
                placeholder="+998"
                className="bg-slate-200 rounded-2xl p-2 w-[100%]"
              />
            </label>

            <label htmlFor="" className="w-[49%]">
              Mantiqiy bilim darajangiz <br />
              <input
                type="text"
                placeholder="IQ"
                className="bg-slate-200 rounded-2xl p-2 w-[100%]"
              />
            </label>

            <label htmlFor="" className="w-[49%]">
              Ingliz tili darajangiz <br />
              <input
                type="text"
                placeholder="C1"
                className="bg-slate-200 rounded-2xl p-2 w-[100%]"
              />
            </label>
          </form>

          <div className="bottom flex justify-between items-center pt-5">
            <div className="check flex gap-3 w-[49%] ">
              <input type="checkbox" />
              <p>Shaxsiz malumotlarizni qayta ishlashimizga rozimisz</p>
            </div>

            <button className="flex rounded-3xl justify-between items-center w-[49%] bg-blue-700 text-white p-4">
              Ariza Jo'natish<i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
