import React, { useState, useEffect, useContext } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { State, City, Country } from "country-state-city";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { AuthContext } from "../../../context/AuthContext";
import newRequest from "../../../utils/newRequest";
import { useNavigate } from "react-router-dom";

const ContactInfo = () => {
  const { currentUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const [isAccountEditing, setIsEditingAccount] = useState(false);
  const [isLocationEditing, setIsEditingLocation] = useState(false);
  const [isPersonalEditing, setIsEditingPersonal] = useState(false); // Added state for Personal Details editing

  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [displayName, setDisplayName] = useState("Karim Douadjia"); // Added state for display name
  const [dateOfBirth, setDateOfBirth] = useState("1990-01-01"); // Added state for Date of Birth
  const [gender, setGender] = useState("Male"); // Added state for Gender
  const [occupation, setOccupation] = useState("Software Engineer"); // Added state for Occupation
  const [statesData, setStatesData] = useState([]);
  const [citiesData, setCitiesData] = useState([]);
  const [countriesData, setCountriesData] = useState([]);

  // Temporary state for editing
  const [tempCountry, setTempCountry] = useState(currentUser.country);
  const [tempState, setTempState] = useState("");
  const [tempCity, setTempCity] = useState("");
  const [tempZipCode, setTempZipCode] = useState("");
  const [tempAddress, setTempAddress] = useState("");
  const [tempPhone, setTempPhone] = useState("");
  const [tempDisplayName, setTempDisplayName] = useState(""); // Added temp state for display name
  const [tempDateOfBirth, setTempDateOfBirth] = useState(""); // Added temp state for Date of Birth
  const [tempGender, setTempGender] = useState(""); // Added temp state for Gender
  const [tempOccupation, setTempOccupation] = useState(""); // Added temp state for Occupation

  useEffect(() => {
    setCountriesData(Country.getAllCountries());
  }, []);

  useEffect(() => {
    if (tempCountry) {
      setStatesData(State.getStatesOfCountry(tempCountry));
    } else {
      setStatesData([]);
      setState("");
      setCitiesData([]);
    }
  }, [tempCountry]);

  useEffect(() => {
    if (tempState) {
      setCitiesData(City.getCitiesOfState(tempCountry, tempState));
    } else {
      setCitiesData([]);
    }
  }, [tempState, tempCountry]);

  const handleEditAccountClick = () => {
    setTempDisplayName(displayName); // Set temp display name
    setIsEditingAccount(true);
  };

  const handleCancelAccountClick = () => {
    setIsEditingAccount(false);
  };

  const handleEditLocationClick = () => {
    setTempCountry(country);
    setTempState(state);
    setTempCity(city);
    setIsEditingLocation(true);
  };

  const handleCancelLocationClick = () => {
    setIsEditingLocation(false);
  };

  const handleUpdateLocationClick = () => {
    setCountry(tempCountry);
    setState(tempState);
    setCity(tempCity);
    setZipCode(tempZipCode);
    setAddress(tempAddress);
    setPhone(tempPhone);
    setIsEditingLocation(false);
  };

  /*const handleUpdateAccountClick = () => {
    setDisplayName(tempDisplayName); // Update display name
    setIsEditingAccount(false);
  };*/

  const handleEditPersonalClick = () => {
    setTempDateOfBirth(dateOfBirth);
    setTempGender(gender);
    setTempOccupation(occupation);
    setIsEditingPersonal(true);
  };

  const handleCancelPersonalClick = () => {
    setIsEditingPersonal(false);
  };
  /*
  const handleUpdatePersonalClick = () => {
    setDateOfBirth(tempDateOfBirth);
    setGender(tempGender);
    setOccupation(tempOccupation);
    setIsEditingPersonal(false);
  };
  */

  const handleAccountSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { displayName, email, fname, lname } = Object.fromEntries(formData);
    console.log(displayName, email, fname, lname);
    try {
      const res = await newRequest.put(`/users/${currentUser._id}`, {
        displayName,
        fname,
        lname,
        email,
      });
      updateUser(res.data);
      setIsEditingAccount(false);
      navigate("/settings/contact-info");
      toast.success("Information updated successfully!");
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };

  const handlePersonalSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { dob, gender, userOccupation } = Object.fromEntries(formData);
    console.log(dob, gender, userOccupation);
    try {
      const res = await newRequest.put(`/users/${currentUser._id}`, {
        dob,
        userOccupation,
        gender,
      });
      updateUser(res.data);
      setIsEditingPersonal(false);
      navigate("/settings/contact-info");
      toast.success("Information updated successfully!");
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };

const handleDeleteAccount = async () => {
  const isConfirmed = window.confirm(
    "Are you sure you want to delete your account?"
  );
  if (!isConfirmed) {
    return;
  }

  try {
    await newRequest.delete(`/users/${currentUser._id}`);
    updateUser(null);
    navigate("/login");
  } catch (err) {
    console.log(err);
    setError(err.response.data.message);
  }
};

  return (
    <div className="p-4">
      <h2 className="text-3xl tracking-tighter font-medium mb-4">
        Contact Info
      </h2>

      {/* Account Edit */}
      <div className="bg-white shadow-sm border border-[#D9D9D9] rounded-2xl p-7 mb-7">
        <div className="full flex justify-between items-center mb-4">
          <h2 className="text-2xl font-medium tracking-tighter">Account</h2>
          <div className="flex items-center">
            {!isAccountEditing && (
              <button
                className="text-[#209211] flex items-center justify-center border rounded-[50%] border-[#E6E6E6] text-lg p-[5px] hover:bg-[#F9F9F9] mr-2"
                onClick={handleEditAccountClick}
              >
                <MdOutlineEdit />
              </button>
            )}
          </div>
        </div>

        {isAccountEditing ? (
          <form onSubmit={handleAccountSubmit} className="bg-white">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="display-name"
              >
                Display Name
              </label>
              <input
                className="w-full border p-2 rounded-lg py-2 px-3 focus-within:border-[#3e3e3e5f] focus-within:outline-none hover:border-[#3e3e3e5f] focus:border-[#3e3e3e5f]"
                id="display-name"
                type="text"
                name="displayName"
                defaultValue={currentUser.displayName}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="first-name"
              >
                First name
              </label>
              <input
                className="w-full border p-2 rounded-lg py-2 px-3 focus-within:border-[#3e3e3e5f] focus-within:outline-none hover:border-[#3e3e3e5f] focus:border-[#3e3e3e5f]"
                id="first-name"
                type="text"
                name="fname"
                defaultValue={currentUser.fname}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="last-name"
              >
                Last name
              </label>
              <input
                className="w-full border p-2 rounded-lg py-2 px-3 focus-within:border-[#3e3e3e5f] focus-within:outline-none hover:border-[#3e3e3e5f] focus:border-[#3e3e3e5f]"
                id="last-name"
                name="lname"
                type="text"
                defaultValue={currentUser.lname}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full border p-2 rounded-lg py-2 px-3 focus-within:border-[#3e3e3e5f] focus-within:outline-none hover:border-[#3e3e3e5f] focus:border-[#3e3e3e5f]"
                id="email"
                type="email"
                name="email"
                defaultValue={currentUser.email}
              />
            </div>
            <div className="flex items-center mt-7">
              <button
                className="px-5 py-2 !bg-[#0E9F6E] text-white rounded-3xl hover:bg-[#046c4e] mr-5"
                type="submit"
              >
                Update
              </button>
              <button
                className="text-[#0E9F6E] font-medium hover:underline"
                type="button"
                onClick={handleCancelAccountClick}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div>
            <div className="flex items-center mb-5">
              <p className="text-lg font-medium text-gray-800 mr-7">User ID:</p>
              <p className="text-lg font-medium text-gray-800">
                {currentUser.username}
              </p>
            </div>
            <div className="flex items-center mb-5">
              <p className="text-lg font-medium text-gray-800 mr-7">
                Display Name:
              </p>
              <p className="text-lg font-medium text-gray-800">
                {currentUser.displayName}
              </p>
            </div>
            <div className="flex items-center mb-5">
              <p className="text-lg font-medium text-gray-800 mr-7">Name:</p>
              <p className="text-lg font-medium text-gray-800">
                {currentUser.fname} {currentUser.lname}
              </p>
            </div>
            <div className="flex items-center mb-5">
              <p className="text-lg font-medium text-gray-800 mr-7">Email:</p>
              <p className="text-lg font-medium text-gray-800">
                {currentUser.email}
              </p>
            </div>
            <button
              className="text-red-700 font-medium text-lg tracking-tighter"
              onClick={handleDeleteAccount}
            >
              Close my account
            </button>
          </div>
        )}
      </div>

      {/* Personal Details Edit */}
      <div className="bg-white shadow-sm border border-[#D9D9D9] rounded-2xl p-7 mb-7">
        <div className="full flex justify-between items-center mb-4">
          <h2 className="text-2xl font-medium tracking-tighter">
            Personal Details
          </h2>
          <div className="flex items-center">
            {!isPersonalEditing && (
              <button
                className="text-[#209211] flex items-center justify-center border rounded-[50%] border-[#E6E6E6] text-lg p-[5px] hover:bg-[#F9F9F9] mr-2"
                onClick={handleEditPersonalClick}
              >
                <MdOutlineEdit />
              </button>
            )}
          </div>
        </div>

        {isPersonalEditing ? (
          <form onSubmit={handlePersonalSubmit} className="bg-white">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="date-of-birth"
              >
                Date of Birth
              </label>
              <input
                className="w-full border p-2 rounded-lg py-2 px-3 focus-within:border-[#3e3e3e5f] focus-within:outline-none hover:border-[#3e3e3e5f] focus:border-[#3e3e3e5f]"
                id="date-of-birth"
                type="date"
                name="dob"
                defaultValue={currentUser.dob}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="gender"
              >
                Gender
              </label>
              <select
                className="w-full border p-2 rounded-lg py-2 px-3 focus-within:border-[#3e3e3e5f] focus-within:outline-none hover:border-[#3e3e3e5f] focus:border-[#3e3e3e5f]"
                id="gender"
                defaultValue={currentUser.gender}
                name="gender"
              >
                <option value="">Select a gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="occupation"
              >
                Occupation
              </label>
              <input
                className="w-full border p-2 rounded-lg py-2 px-3 focus-within:border-[#3e3e3e5f] focus-within:outline-none hover:border-[#3e3e3e5f] focus:border-[#3e3e3e5f]"
                id="occupation"
                type="text"
                name="userOccupation"
                defaultValue={currentUser.userOccupation}
              />
            </div>
            <div className="flex items-center mt-7">
              <button
                className="px-5 py-2 !bg-[#0E9F6E] text-white rounded-3xl hover:bg-[#046c4e] mr-5"
                type="submit"
              >
                Update
              </button>
              <button
                className="text-[#0E9F6E] font-medium hover:underline"
                type="button"
                onClick={handleCancelPersonalClick}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div>
            <div className="flex items-center mb-5">
              <p className="text-lg font-medium text-gray-800 mr-7">
                Date of Birth:
              </p>
              <p className="text-lg font-medium text-gray-800">
                {currentUser.dob}
              </p>
            </div>
            <div className="flex items-center mb-5">
              <p className="text-lg font-medium text-gray-800 mr-7">Gender:</p>
              <p className="text-lg font-medium text-gray-800">
                {currentUser.gender}
              </p>
            </div>
            <div className="flex items-center mb-5">
              <p className="text-lg font-medium text-gray-800 mr-7">
                Occupation:
              </p>
              <p className="text-lg font-medium text-gray-800">
                {currentUser.userOccupation}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Location Edit */}
      <div className="bg-white shadow-sm border border-[#D9D9D9] rounded-2xl p-7 mb-7">
        <div className="full flex justify-between items-center mb-4">
          <h2 className="text-2xl font-medium tracking-tighter">Location</h2>
          <div className="flex items-center">
            {!isLocationEditing && (
              <button
                className="text-[#209211] flex items-center justify-center border rounded-[50%] border-[#E6E6E6] text-lg p-[5px] hover:bg-[#F9F9F9] mr-2"
                onClick={handleEditLocationClick}
              >
                <MdOutlineEdit />
              </button>
            )}
          </div>
        </div>

        {isLocationEditing ? (
          <div className="bg-white">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="time-zone"
              >
                Time Zone
              </label>
              <input
                className="w-full border p-2 rounded-lg py-2 px-3 focus-within:border-[#3e3e3e5f] focus-within:outline-none hover:border-[#3e3e3e5f] focus:border-[#3e3e3e5f]"
                id="time-zone"
                type="text"
                value="UTC+01:00 Algeria"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="address"
              >
                Address
              </label>
              <input
                className="w-full border p-2 rounded-lg py-2 px-3 focus-within:border-[#3e3e3e5f] focus-within:outline-none hover:border-[#3e3e3e5f] focus:border-[#3e3e3e5f]"
                id="address"
                type="text"
                value={tempAddress}
                onChange={(e) => setTempAddress(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="country"
              >
                Country
              </label>
              <select
                className="w-full border p-2 rounded-lg py-2 px-3 focus-within:border-[#3e3e3e5f] focus-within:outline-none hover:border-[#3e3e3e5f] focus:border-[#3e3e3e5f]"
                id="country"
                value={tempCountry}
                onChange={(e) => setTempCountry(e.target.value)}
                defaultValue={currentUser.country}
              >
                <option value="">Select Country</option>
                {countriesData.map((country) => (
                  <option key={country.isoCode} value={country.isoCode}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="state"
              >
                State
              </label>
              <select
                className="w-full border p-2 rounded-lg py-2 px-3 focus-within:border-[#3e3e3e5f] focus-within:outline-none hover:border-[#3e3e3e5f] focus:border-[#3e3e3e5f]"
                id="state"
                value={tempState}
                onChange={(e) => setTempState(e.target.value)}
                disabled={!tempCountry}
              >
                <option value="">Select State</option>
                {statesData.map((state) => (
                  <option key={state.isoCode} value={state.isoCode}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="city"
              >
                City
              </label>
              <select
                className="w-full border p-2 rounded-lg py-2 px-3 focus-within:border-[#3e3e3e5f] focus-within:outline-none hover:border-[#3e3e3e5f] focus:border-[#3e3e3e5f]"
                id="city"
                //value={tempCity}
                onChange={(e) => setTempCity(e.target.value)}
                disabled={!tempState}
                defaultValue={currentUser.country}
              >
                <option value="">Select City</option>
                {citiesData.map((city) => (
                  <option key={city.name} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="zip-code"
              >
                Zip Code
              </label>
              <input
                className="w-full border p-2 rounded-lg py-2 px-3 focus-within:border-[#3e3e3e5f] focus-within:outline-none hover:border-[#3e3e3e5f] focus:border-[#3e3e3e5f]"
                id="zip-code"
                type="text"
                value={tempZipCode}
                onChange={(e) => setTempZipCode(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Phone
              </label>
              <PhoneInput
                country={"dz"}
                value={tempPhone}
                onChange={(phone) => setTempPhone(phone)}
                inputProps={{
                  name: "phone",
                  required: true,
                  autoFocus: false,
                }}
                containerClass="w-full"
                inputClass="!w-full !border p-2 !rounded-lg py-2 px-3 focus-within:border-[#3e3e3e5f] focus-within:!outline-none hover:!border-[#3e3e3e5f] focus:border-[#3e3e3e5f]"
              />
            </div>
            <div className="flex items-center mt-7">
              <button
                className="px-5 py-2 !bg-[#0E9F6E] text-white rounded-3xl hover:bg-[#046c4e] mr-5"
                type="button"
                onClick={handleUpdateLocationClick}
              >
                Update
              </button>
              <button
                className="text-[#0E9F6E] font-medium hover:underline"
                type="button"
                onClick={handleCancelLocationClick}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center mb-5">
              <p className="text-lg font-medium text-gray-800 mr-7">
                Time Zone:
              </p>
              <p className="text-lg font-medium text-gray-800">
                UTC+01:00 Algeria
              </p>
            </div>
            <div className="flex items-center mb-5">
              <p className="text-lg font-medium text-gray-800 mr-7">Address:</p>
              <p className="text-lg font-medium text-gray-800">
                {address || "N/A"}
              </p>
            </div>
            <div className="flex items-center mb-5">
              <p className="text-lg font-medium text-gray-800 mr-7">Country:</p>
              <p className="text-lg font-medium text-gray-800">
                {currentUser.country || "N/A"}
              </p>
            </div>
            <div className="flex items-center mb-5">
              <p className="text-lg font-medium text-gray-800 mr-7">State:</p>
              <p className="text-lg font-medium text-gray-800">
                {currentUser.state || "N/A"}
              </p>
            </div>
            <div className="flex items-center mb-5">
              <p className="text-lg font-medium text-gray-800 mr-7">City:</p>
              <p className="text-lg font-medium text-gray-800">
                {currentUser.city || "N/A"}
              </p>
            </div>
            <div className="flex items-center mb-5">
              <p className="text-lg font-medium text-gray-800 mr-7">
                Zip Code:
              </p>
              <p className="text-lg font-medium text-gray-800">
                {zipCode || "N/A"}
              </p>
            </div>
            <div className="flex items-center mb-5">
              <p className="text-lg font-medium text-gray-800 mr-7">Phone:</p>
              <p className="text-lg font-medium text-gray-800">
                {currentUser.phone || "N/A"}
              </p>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactInfo;
