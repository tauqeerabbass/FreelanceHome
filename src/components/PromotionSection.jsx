import asset2 from "/assets/asset2.png";
import asset3 from "/assets/asset3.png";
import asset4 from "/assets/asset4.png";
import asset20 from "/assets/asset20.jpg";

const PromotionSection = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        width: "1920px",
        height: "442.97px",
        backgroundImage: `url(${asset20})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left side - Mobile phones */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* iPhone */}
              <div className="relative w-[339.34px] h-[660.57px] transform rotate-12 z-10">
                <img
                  src={asset2}
                  alt="iPhone"
                  className="absolute -top-20 left-0 w-[339.34px] h-[660.57px] object-contain rounded-3xl z-20"
                />
              </div>

              {/* Samsung phone behind */}
              <div className="absolute w-[743px] h-[743px] left-[33px] -top-[21px] w-44 h-96 transform z-10">
                <img
                  src={asset4}
                  alt="Samsung Phone"
                  className="w-full h-full object-contain rounded-3xl"
                />
              </div>
            </div>
          </div>

          {/* Center - Content */}
          <div className="text-center text-white content-center">
            <p className="relative font-inter text-[17.3px] leading-[25.2px] tracking-normal mt-[120px] ml-[250px] w-[164.68px] h-[18px]">
              Ad
            </p>
            <h2 className="relative font-bold font-inter text-[40.2px] leading-[50.4px] tracking-[-2px] w-[570px] h-[100.78px] ml-[50px] mt-[15px]">
              Get 20% Off Smartphones &<br />
              Rentals – Visit Our Shop!
            </h2>
            <button className="relative w-[301px] h-[55px] font-inter text-[14.77px] leading-[21px] tracking-normal font-bold bg-transparent border-2 border-opacity-5 text-white rounded-full transition-colors mt-[30px] ml-[30px]">
              Explore the Platform Now →
            </button>
          </div>

          {/* Right side - Tablet/Dashboard */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="rounded-2xl transform rotate-12 shadow-2xl">
                <div className="w-full h-full rounded-xl relative overflow-hidden">
                  {/* Dashboard mockup */}
                  <div className="flex items-center justify-between -top-[178.03px] left-[1377px]">
                    <img
                      src={asset3}
                      alt="Logo"
                      className="w-[543px] h-[621px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;
