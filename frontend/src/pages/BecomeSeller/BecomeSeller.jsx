import { useNavigate } from "react-router-dom";
import AboutArea from "./components/AboutArea.jsx";
import { FaArrowRightLong } from "react-icons/fa6";

const BecomeSeller = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="my-11 py-20 bg-[url('https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/e88236dd83c7f9408af91782329400d7-1704292070364/Banner-Desktop.png')] bg-no-repeat bg-cover bg-center relative">
        <div className="w-full px-3 mx-auto min-[576px]:max-w-[540px] min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] min-[1400px]:max-w-[1320px] !py-18">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-title relative lg-b:mb-[60px] mb-[30px]">
                <h2 className="title font-bold text-white leading-[1.3125] mt-0 mb-5 !text-5xl xs-b:text-[32px] text-[20px]">
                  Start Your Freelancing Journey
                </h2>
                <p className="font-normal my-0 mx-0 text-white leading-[1.85] bg-[#ffffff24] px-4 py-1 rounded-lg w-fit">
                  Turn your skills into a profitable business with our platform.
                </p>
              </div>
              <a
                className="ud-btn btn-thm bg-[#5bbb7b] border-2 border-[#5bbb7b] text-white cursor-pointer font-medium flex justify-center items-center text-lg w-fit"
                onClick={() => navigate("/become-seller")}
              >
                Become Seller
                <FaArrowRightLong className="ml-[10px] -rotate-45 text-white" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="my-11 py-20 bg-gray-100">
        <div className="w-full px-3 mx-auto min-[576px]:max-w-[540px] min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] min-[1400px]:max-w-[1320px]">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-title relative lg-b:mb-[60px] mb-[30px]">
                <h2 className="title font-bold text-gray-800 leading-[1.3125] mt-0 mb-5 !text-5xl xs-b:text-[32px] text-[20px]">
                  Why Become a Seller?
                </h2>
                <p className="font-normal my-0 mx-0 text-gray-700 leading-[1.85]">
                  Becoming a seller on our platform allows you to turn your
                  skills and hobbies into a steady source of income. You can
                  reach a global audience, manage your workload, and work
                  flexibly.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="feature-box flex items-start">
                {/* <FaGlobe className="text-2xl text-[#5bbb7b] mr-3" /> */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Global Reach
                  </h3>
                  <p className="text-gray-700 leading-[1.85]">
                    Expand your customer base beyond local boundaries. Our
                    platform connects you with clients from all over the world.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="feature-box flex items-start">
                {/* <FaClock className="text-2xl text-[#5bbb7b] mr-3" /> */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Flexibility
                  </h3>
                  <p className="text-gray-700 leading-[1.85]">
                    Work at your own pace, choose your own projects, and manage
                    your schedule to achieve the perfect work-life balance.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="feature-box flex items-start">
                {/* <FaLock className="text-2xl text-[#5bbb7b] mr-3" /> */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Secure Payments
                  </h3>
                  <p className="text-gray-700 leading-[1.85]">
                    Get paid securely and on time with our reliable payment
                    system. Focus on your work while we handle the financials.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-11 py-20 bg-white">
        <div className="w-full px-3 mx-auto min-[576px]:max-w-[540px] min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] min-[1400px]:max-w-[1320px]">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-title relative lg-b:mb-[60px] mb-[30px]">
                <h2 className="title font-bold text-gray-800 leading-[1.3125] mt-0 mb-5 !text-5xl xs-b:text-[32px] text-[20px]">
                  How It Works
                </h2>
                <p className="font-normal my-0 mx-0 text-gray-700 leading-[1.85]">
                  Getting started as a seller on our platform is simple and
                  straightforward. Follow these steps to set up your seller
                  profile and begin selling:
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="step-box">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Step 1: Create an Account
                </h3>
                <p className="text-gray-700 leading-[1.85]">
                  Sign up for free and create a seller account. Fill out your
                  profile with relevant information and showcase your skills.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="step-box">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Step 2: List Your Services
                </h3>
                <p className="text-gray-700 leading-[1.85]">
                  Create service listings with detailed descriptions, pricing,
                  and delivery times. Add attractive images and samples of your
                  work.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="step-box">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Step 3: Start Selling
                </h3>
                <p className="text-gray-700 leading-[1.85]">
                  Once your services are live, clients can find and hire you.
                  Communicate with clients, deliver high-quality work, and build
                  your reputation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutArea />
    </>
  );
};

export default BecomeSeller;
