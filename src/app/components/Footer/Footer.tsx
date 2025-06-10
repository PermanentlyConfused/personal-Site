import ShippingLabel from "./ShippingLabel/ShippingLabel";

const Footer: React.FC = () => {
  return (
    <div className="relative w-full bg-[#e8e1db] bg-cover bg-center">
      <div className="mx-auto max-w-screen-xl px-6 py-12 font-sans lg:px-12 lg:py-10">
        <div className="flex flex-col gap-10 font-[family-name:var(--font-montserrat)] lg:flex lg:flex-row lg:justify-between">
          <ShippingLabel
            colorVariation={1}
            title={
              <span className="text-2xl text-black">SEND ME STUFF :D</span>
            }
            content={
              <span className="text-md text-black">
                10 Clarkson Ave-Box 3340, Potsdam, NY, 13699"
              </span>
            }
          />
          <ShippingLabel
            colorVariation={0}
            title={<span className="text-2xl text-black">Contact Me!</span>}
            content={<span className="text-md text-black">BLAha</span>}
          />
          {/* <ShippingLabel /> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
