import asset2 from "/assets/asset2.png";
import asset3 from "/assets/asset3.png";
import asset4 from "/assets/asset4.png";
import asset20 from "/assets/asset20.jpg";

const PromotionSection = () => {
  return (
    <section
      className="relative top-[80px]"
      style={{
        width: "1920px",
        height: "442.97px",
        backgroundImage: `url(${asset20})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Floating iPhone */}
      <img
        src={asset2}
        alt="iPhone"
        className="absolute -top-[100px] left-[1.97px] w-[339.34px] h-[660.57px] object-contain rotate-[15deg] z-20"
      />

      {/* Floating Samsung behind */}
      <img
        src={asset4}
        alt="Samsung Phone"
        className="absolute -top-[21px] left-[33px] w-[743px] h-[743px] object-contain rotate-[0deg] z-30"
      />

      {/* Floating Tablet */}
      <img
        src={asset3}
        alt="Tablet"
        className="absolute -top-[178.03px] left-[1377px] w-[543px] h-[621px] object-contain rotate-[-0deg] z-20"
      />

      {/* Center Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-30">
        <p className="font-inter text-[17.3px] leading-[25.2px] mb-3">Ad</p>
        <h2 className="font-bold font-inter text-[40.2px] leading-[50.4px] tracking-[-2px] mb-6">
          Get 20% Off Smartphones &<br />
          Rentals – Visit Our Shop!
        </h2>
        <button className="w-[301px] h-[55px] font-inter text-[14.77px] font-bold border-2 border-white border-opacity-50 rounded-full hover:bg-white hover:text-black transition-colors">
          Explore the Platform Now →
        </button>
      </div>
    </section>
  );
};

export default PromotionSection;
