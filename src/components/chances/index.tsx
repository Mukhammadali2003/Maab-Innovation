import "./style.scss"

const Chances = () => {
  return (
    <div className="Chances mt-[100px]">
      <div className="container flex flex-wrap justify-between">
        <div className="text w-[100%]">
          <h1 className="text-center text-sky-700 text-3xl">
            MAAB AKADEMIYASIDA BI IMKONIYATLARINI OCHING
          </h1>
          <p className="text-center mt-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam earum
            numquam eius modi veniam doloribus accusantium accusamus voluptatum
            deleniti iusto, nesciunt, similique praesentium. Atque maxime, eum
            nesciunt animi ipsum rem neque facilis repellat. Sunt aliquid sit,
            inventore soluta numquam autem ab, consequuntur explicabo
          </p><br /><br />
        </div>

        <div className="right w-[48%] border bg-slate-200 rounded-3xl p-5">
            <h2 className="text-3xl text-blue-700">DATA ANALYTICS</h2>
            <p className="pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, cum deleniti dolore voluptate harum voluptates sed ut autem voluptatum facilis molestiae, vel eos? Vitae mollitia autem excepturi. Sed, facilis aperiam?</p><br /><br />
            <div className="price bg-white w-[100%] p-3 ">
              <p className="text-gray ">Kurs narxi:</p>
              <p className="text-black text-2xl">23, 000, 000 so'm</p>
            </div>
          </div>

          <div className="left w-[48%] border bg-slate-200 rounded-3xl p-5">
            <h2 className="text-3xl text-blue-700">DATA ENGINEERING</h2>
            <p className="pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, cum deleniti dolore voluptate harum voluptates sed ut autem voluptatum facilis molestiae, vel eos? Vitae mollitia autem excepturi. Sed, facilis aperiam?</p><br /><br />
            <div className="price bg-white w-[100%] p-3 ">
              <p className="text-gray ">Kurs narxi:</p>
              <p className="text-black text-2xl">23, 000, 000 so'm</p>
            </div>
          </div>

      </div>
    </div>
  );
}

export default Chances;
