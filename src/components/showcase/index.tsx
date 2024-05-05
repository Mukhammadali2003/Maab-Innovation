

const Showcase = () => {
  return (
    <div className="Showcase p-3 pt-5">
      <div className="container ">
        <iframe
          className="rounded-2xl"
          width="1200"
          height="500"
          src="https://www.youtube.com/embed/DQWf_Joalbo?si=1RfynWou_hSrBtL8"
          title="YouTube video player"
          // frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // referrerpolicy="strict-origin-when-cross-origin"
          // allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Showcase;
