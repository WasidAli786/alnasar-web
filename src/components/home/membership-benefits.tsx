import { benefits } from "@/src/config/site";
import NextImage from "../next-image";

const MembershipBenefits = () => {
  return (
    <>
      <div className="custom-container !mr-0 2xl:!px-0 flex flex-col lg:flex-row justify-between lg:items-center pb-10 lg:py-10">
        <div className="lg:max-w-[300px]">
          <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-custom-primary">
            ENJOY AMAZING BENEFITS SUCH AS...
          </h2>
        </div>

        <div className="transform -skew-x-6 border-t-[30px] border-custom-primary border-l-[15px] mt-5">
          <div className="overflow-x-auto max-w-full">
            <div className="bg-blue-gradient flex gap-2 p-2 pb-0 w-max">
              {benefits.map((benefit) => (
                <div
                  key={benefit.id}
                  className="bg-custom-primary p-1 flex-shrink-0 w-52"
                >
                  <div className="h-48 w-48 bg-blue-gradient flex items-center justify-center">
                    <div className="relative h-24 w-24">
                      <NextImage src={benefit.icon} alt={benefit.title} />
                    </div>
                  </div>
                  <h6 className="text-xs font-bold text-center text-wrap mt-2 max-w-48">
                    {benefit.title}
                  </h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MembershipBenefits;
