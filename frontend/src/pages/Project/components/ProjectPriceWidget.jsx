import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ProjectPriceWidget() {
  return (
    <>
      <div className="price-widget pt-[25px] rounded-[8px] border border-[#e9e9e9] mb-[40px] pb-[30px] px-[30px] relative bg-white shadow">
        <h3 className="text-[28px] text-[#222] leading-[1.3125] mt-0 mb-2 font-medium">
          $100 - $150
        </h3>
        <p className="text-[#222] font-normal mx-0 mt-0 mb-[15px] leading-[1.85]  text-[14px] ">
          Hourly Rate
        </p>
        <div className="grid">
          <Link
            href="/contact"
            className="ud-btn btn-thm max-[339px]:py-[13px] max-[339px]:px-[25px] bg-[#5bbb7b] border-2 border-[#5bbb7b] text-white cursor-pointer !font-medium flex justify-center items-center text-lg  "
          >
            Submit a Proposal
            <FaArrowRightLong className="ml-[10px] -rotate-45 text-white" />
          </Link>
        </div>
      </div>
    </>
  );
}
