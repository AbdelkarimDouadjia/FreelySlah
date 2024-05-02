import React, { useContext } from "react";
import AppContext from "./Context";
import "./styles.module.css";
import { Country } from "country-state-city";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormTwo2 = () => {
  const myContext = useContext(AppContext);
  const updateContext = myContext.userDetails;
  let countryData = Country.getAllCountries();
  //   const [stateData, setStateData] = useState();
  //   const [cityData, setCityData] = useState();

  //   const [country, setCountry] = useState(countryData[0]);
  //   const [state, setState] = useState();
  //   const [city, setCity] = useState();

  //   useEffect(() => {
  //     setStateData(State.getStatesOfCountry(country?.isoCode));
  //   }, [country]);

  //   useEffect(() => {
  //     setCityData(City.getCitiesOfState(country?.isoCode, state?.isoCode));
  //   }, [state]);

  //   useEffect(() => {
  //     stateData && setState(stateData[0]);
  //   }, [stateData]);

  //   useEffect(() => {
  //     cityData && setCity(cityData[0]);
  //   }, [cityData]);

  //   console.log(country);
  //   console.log(city);
  //   console.log(state);

  //  let cityData = City.getAllCities();
  //   let stateData = state.getAllStates();

  const next = () => {
    if (updateContext.userDOB == null) {
      toast.error("Please enter your Date of Birth");
    } else if (
      updateContext.userPhone == null ||
      updateContext.userPhone.length !== 10
    ) {
      toast.error("Please enter your phone number correctly");
    } else if (updateContext.userCountry == null) {
      toast.error("Please enter your Country");
    } else if (updateContext.userGender == null) {
      toast.error("Please enter your gender");
    } else if (updateContext.userOccupation == null) {
      toast.error("Please enter your Occupation");
    } else {
      updateContext.setStep(updateContext.currentPage + 1);
    }
  };

  return (
    <>
      <div className="scroll flex flex-col items-center justify-center gap-3 bg-[#F9F9F9] min-h-[84vh]">
        <div className="px-4 md-b:max-w-[700px] text-center">
          <h2 className="text-lg md-b:text-xl font-bold !text-[#333]">
            Personal Details Requested: Tell Us About Yourself
          </h2>
          <h4 className="text-xs text-[#00000099]">
            You can always change them later.
          </h4>
          <form className="form flex flex-col items-center w-full gap-5 mt-5 max-w-[450px] mx-auto">
            <div className="flex justify-between flex-wrap w-full text-left">
              {/* Date of Birth */}
              <div className="w-[44%] mx-auto mt-1 leading-normal">
                <label
                  className="mb-2 text-xs font-medium text-gray-900 dark:text-[#333]"
                  htmlFor="dob"
                >
                  Date of Birth
                </label>
                <input
                  className="block p-4 w-full input focus:outline-none focus:border-[#0e9f6e] focus-within:outline-none focus-within:border-[#0e9f6e] placeholder:text-sm placeholder:text-[#BEB5C3]"
                  type="date"
                  name="dob"
                  id="dob"
                  placeholder="Date of Birth"
                  required
                  onChange={(e) => updateContext.setDOB(e.target.value)}
                />
              </div>
              <div className="w-[44%] mx-auto mt-1 leading-normal">
                <label
                  className="mb-2 text-xs font-medium text-gray-900 dark:text-[#333]"
                  htmlFor="phone"
                >
                  Mobile Number
                </label>
                <input
                  className="block p-4 w-full input focus:outline-none focus:border-[#0e9f6e] focus-within:outline-none focus-within:border-[#0e9f6e] placeholder:text-sm placeholder:text-[#BEB5C3]"
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Mobile Number"
                  required
                  maxLength="10"
                  onChange={(e) => updateContext.setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-between flex-wrap w-full text-left">
              {/* <!-- Country Input --> */}
              <div className="w-[44%] mx-auto mt-1 leading-normal">
                <label
                  htmlFor="country"
                  className="text-[#344054] text-xs font-normal mb-1 inline-block"
                >
                  Country
                </label>

                <select
                  id="country"
                  name="country"
                  onChange={(e) => updateContext.setCountry(e.target.value)}
                  className="block w-full input focus:outline-none focus:border-[#0e9f6e] focus-within:outline-none focus-within:border-[#0e9f6e] placeholder:text-sm placeholder:text-[#BEB5C3]"
                >
                  <option value="">Select Country</option>
                  {countryData.map((country) => (
                    <option key={country.isoCode} value={country.isoCode}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              {/* <!-- Country Input --> */}
              {/* <div className="w-[44%] mx-auto mt-1 leading-normal">
                <label
                  htmlFor="country"
                  className="text-[#344054] text-xs font-normal mb-1 inline-block"
                >
                  Country
                </label>

                <select
                  id="country"
                  name="country"
                  onChange={(e) => updateContext.setCountry(e.target.value)}
                  className="block w-full input focus:outline-none focus:border-[#0e9f6e] focus-within:outline-none focus-within:border-[#0e9f6e] placeholder:text-sm placeholder:text-[#BEB5C3] "
                >
                  <option value="">Select Country</option>
                  {countryData.map((country) => (
                    <option key={country.isoCode} value={country.isoCode}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div> */}

              <div className="flex justify-between flex-wrap w-full text-left">
                {/* Gender */}
                <div className="w-[44%] mx-auto mt-1 leading-normal">
                  <label
                    className="mb-2 text-xs font-medium text-gray-900 dark:text-[#333]"
                    htmlFor="gender"
                  >
                    Gender
                  </label>
                  <select
                    className="block w-full input focus:outline-none focus:border-[#0e9f6e] focus-within:outline-none focus-within:border-[#0e9f6e] placeholder:text-sm placeholder:text-[#BEB5C3]"
                    name="gender"
                    id="gender"
                    onChange={(e) => updateContext.setGender(e.target.value)}
                  >
                    <option selected>Select </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                {/* Ocuupation */}
                <div className="w-[44%] mx-auto mt-1 leading-normal">
                  <label
                    className="mb-2 text-xs font-medium text-gray-900 dark:text-[#333]"
                    htmlFor="occupation"
                  >
                    Occupation
                  </label>
                  <input
                    className="block p-4 w-full input focus:outline-none focus:border-[#0e9f6e] focus-within:outline-none focus-within:border-[#0e9f6e] placeholder:text-sm placeholder:text-[#BEB5C3]"
                    type="text"
                    name="occupation"
                    id="occupation"
                    placeholder="e.g. Software Developer"
                    required
                    onChange={(e) =>
                      updateContext.setOccupation(e.target.value)
                    }
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex flex-wrap justify-between">
              <button
                className="border mt-3 w-fit font-semibold px-5 py-[5px] text-lg  border-[#1DBF73] !bg-white ud-btn btn-thm btn-white  hover:!bg-[#046c4e] text-[#1DBF73] hover:text-white rounded-md"
                type="button"
                onClick={() =>
                  updateContext.setStep(updateContext.currentPage - 1)
                }
              >
                Previous
              </button>
              <button
                className="border ud-btn btn-thm btn-white mt-3 w-fit font-semibold px-5 py-[5px] text-lg  border-[#1DBF73] !bg-[#0E9F6E]  hover:!bg-[#046c4e] text-white rounded-md   "
                type="button"
                onClick={next}
              >
                Next
              </button>
            </div>
            {/* Handle notifications */}
            <ToastContainer />
          </form>
        </div>
      </div>
    </>
  );
};

export default FormTwo2;
