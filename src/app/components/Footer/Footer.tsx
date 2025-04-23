import ShippingLabel from "./ShippingLabel/ShippingLabel";

const Footer: React.FC = () => {
  return (
    <div className="relative h-[60vh] w-full bg-[#e8e1db] bg-cover bg-center">
      <div className="mx-auto min-h-[60vh] max-w-screen-xl px-6 py-12 font-sans lg:px-12 lg:py-10">
        <div className="flex-col font-[family-name:var(--font-montserrat)] lg:flex lg:flex-row lg:justify-between">
          <ShippingLabel />
          {/* <ShippingLabel /> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
