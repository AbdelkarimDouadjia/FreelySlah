import React, { useState, useEffect } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { State, City, Country } from "country-state-city";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactInfo = () => {
  const [isAccountEditing, setIsEditingAccount] = useState(false);
  const [isLocationEditing, setIsEditingLocation] = useState(false);

  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [statesData, setStatesData] = useState([]);
  const [citiesData, setCitiesData] = useState([]);
  const [countriesData, setCountriesData] = useState([]);

  // Temporary state for editing
  const [tempCountry, setTempCountry] = useState("");
  const [tempState, setTempState] = useState("");
  const [tempCity, setTempCity] = useState("");
  const [tempZipCode, setTempZipCode] = useState("");
  const [tempAddress, setTempAddress] = useState("");
  const [tempPhone, setTempPhone] = useState("");

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
    setIsEditingAccount(true);
  };

  const handleCancelAccountClick = () => {
    setIsEditingAccount(false);
  };

  const handleEditLocationClick = () => {
    setTempCountry(country);
    setTempState(state);
    setTempCity(city);
    setTempZipCode(zipCode);
    setTempAddress(address);
    setTempPhone(phone);
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
          <div className="bg-white">
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
                value="Abdelkarim"
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
                type="text"
                value="Douadjia"
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
                value="abdelkarim.douadjia@gmail.com"
              />
            </div>
            <div className="flex items-center mt-7">
              <button
                className="px-5 py-2 !bg-[#0E9F6E] text-white rounded-3xl hover:bg-[#046c4e] mr-5"
                type="button"
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
          </div>
        ) : (
          <div>
            <div className="flex items-center mb-5">
              <p className="text-lg font-medium text-gray-800 mr-7">User ID:</p>
              <p className="text-lg font-medium text-gray-800">
                karim_douadjia
              </p>
            </div>
            <div className="flex items-center mb-5">
              <p className="text-lg font-medium text-gray-800 mr-7">Name:</p>
              <p className="text-lg font-medium text-gray-800">
                Abdelkarim Douadjia
              </p>
            </div>
            <div className="flex items-center mb-5">
              <p className="text-lg font-medium text-gray-800 mr-7">Email:</p>
              <p className="text-lg font-medium text-gray-800">
                a*****a@gmail.com
              </p>
            </div>
            <button className="text-red-700 font-medium text-lg tracking-tighter">
              Close my account
            </button>
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
                value={tempCity}
                onChange={(e) => setTempCity(e.target.value)}
                disabled={!tempState}
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
                {country || "N/A"}
              </p>
            </div>
            <div className="flex items-center mb-5">
              <p className="text-lg font-medium text-gray-800 mr-7">State:</p>
              <p className="text-lg font-medium text-gray-800">
                {state || "N/A"}
              </p>
            </div>
            <div className="flex items-center mb-5">
              <p className="text-lg font-medium text-gray-800 mr-7">City:</p>
              <p className="text-lg font-medium text-gray-800">
                {city || "N/A"}
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
                {phone || "N/A"}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactInfo;
