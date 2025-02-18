const BannerImg = ({ data }) => {
  return (
    <div className="min-h-[350px] flex justify-center items-center py-12">
      <div className="container">
        <img
          src={data.image}
          alt="Banner"
          className="w-full max-w-[1500px] h-auto mx-auto drop-shadow-2xl object-contain rounded-3xl"
        />
      </div>
    </div>
  );
};

export default BannerImg;
