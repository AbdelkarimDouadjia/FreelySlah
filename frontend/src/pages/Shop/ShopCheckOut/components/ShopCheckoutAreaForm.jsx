import React, { useState, useEffect } from "react";
import { State, City, Country } from "country-state-city";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function ShopCheckoutAreaForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [orderNotes, setOrderNotes] = useState("");
  const [statesData, setStatesData] = useState([]);
  const [citiesData, setCitiesData] = useState([]);
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    setCountriesData(Country.getAllCountries());
  }, []);

  useEffect(() => {
    if (country) {
      setStatesData(State.getStatesOfCountry(country));
    } else {
      setStatesData([]);
      setState("");
      setCitiesData([]);
    }
  }, [country]);

  useEffect(() => {
    if (state) {
      setCitiesData(City.getCitiesOfState(country, state));
    } else {
      setCitiesData([]);
    }
  }, [state, country]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      firstName,
      lastName,
      companyName,
      country,
      state,
      city,
      address,
      apartment,
      zipCode,
      phone,
      email,
      orderNotes,
    };
    console.log("Form Data:", formData);
  };

  return (
    <div className="checkout_form">
      <h4 className="title mb-[30px] text-[20px] font-medium text-[#222] leading-[1.3125] mt-0">
        Billing details
      </h4>
      <div className="checkout_coupon relative">
        <form className="form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-6">
              <div className="mb-[25px]">
                <h6 className="mb-[15px] text-[15px] font-medium text-[#222] leading-[1.3125] mt-0">
                  First Name
                </h6>
                <input
                  className="form-control w-full border p-2 rounded-lg py-2 px-3 focus-within:border-[#3e3e3e5f] focus-within:outline-none hover:border-[#3e3e3e5f] focus:border-[#3e3e3e5f]"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Ali"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="mb-[25px]">
                <h6 className="mb-[15px] text-[15px] font-medium text-[#222] leading-[1.3125] mt-0">
                  Last Name
                </h6>
                <input
                  className="form-control w-full border p-2 rounded-lg py-2 px-3 focus-within:border-[#3e3e3e5f] focus-within:outline-none hover:border-[#3e3e3e5f] focus:border-[#3e3e3e5f]"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Tufan"
                />
              </div>
            </div>
            <div className="col-sm-12">
              <div className="mb-[25px]">
                <h6 className="mb-[15px] text-[15px] font-medium text-[#222] leading-[1.3125] mt-0">
                  Company Name
                </h6>
                <input
                  className="form-control w-full border p-2 rounded-lg py-2 px-3 focus-within:border-[#3e3e3e5f] focus-within:outline-none hover:border-[#3e3e3e5f] focus:border-[#3e3e3e5f]"
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Company"
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="mb-[25px]">
                <h6 className="mb-[15px] text-[15px] font-medium text-[#222] leading-[1.3125] mt-0">
                  Country / Region *
                </h6>
                <select
                  className="form-control w-full border p-2 rounded-lg py-2 px-3 focus-within:border-[#3e3e3e5f] focus-within:outline-none hover:border-[#3e3e3e5f] focus:border-[#3e3e3e5f]"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value="">Select Country</option>
                  {countriesData.map((country) => (
                    <option key={country.isoCode} value={country.isoCode}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="mb-[25px]">
                <h6 className="mb-[15px] text-[15px] font-medium text-[#222] leading-[1.3125] mt-0">
                  State *
                </h6>
                <select
                  className="form-control w-full border p-2 rounded-lg py-2 px-3 focus-within:border-[#3e3e3e5f] focus-within:outline-none hover:border-[#3e3e3e5f] focus:border-[#3e3e3e5f]"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  disabled={!country}
                >
                  <option value="">Select State</option>
                  {statesData.map((state) => (
                    <option key={state.isoCode} value={state.isoCode}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="mb-[25px]">
                <h6 className="mb-[15px] text-[15px] font-medium text-[#222] leading-[1.3125] mt-0">
                  City *
                </h6>
                <select
                  className="form-control w-full border p-2 rounded-lg py-2 px-3 focus-within:border-[#3e3e3e5f] focus-within:outline-none hover:border-[#3e3e3e5f] focus:border-[#3e3e3e5f]"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  disabled={!state}
                >
                  <option value="">Select City</option>
                  {citiesData.map((city) => (
                    <option key={city.name} value={city.name}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="mb-[25px]">
                <h6 className="mb-[15px] text-[15px] font-medium text-[#222] leading-[1.3125] mt-0">
                  House number and street name
                </h6>
                <input
                  className="form-control w-full border p-2 rounded-lg py-2 px-3 focus-within:border-[#3e3e3e5f] focus-within:outline-none hover:border-[#3e3e3e5f] focus:border-[#3e3e3e5f]"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="House number and street name"
                />
              </div>
            </div>
            <div className="col-sm-12">
              <div className="mb-[25px]">
                <h6 className="mb-[15px] text-[15px] font-medium text-[#222] leading-[1.3125] mt-0">
                  Apartment, suite, unit, etc. (optional)
                </h6>
                <input
                  className="form-control w-full border p-2 rounded-lg py-2 px-3 focus-within:border-[#3e3e3e5f] focus-within:outline-none hover:border-[#3e3e3e5f] focus:border-[#3e3e3e5f]"
                  type="text"
                  value={apartment}
                  onChange={(e) => setApartment(e.target.value)}
                  placeholder="Apartment, suite, unit, etc."
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="mb-[25px]">
                <h6 className="mb-[15px] text-[15px] font-medium text-[#222] leading-[1.3125] mt-0">
                  Zip Code
                </h6>
                <input
                  className="form-control w-full border p-2 rounded-lg py-2 px-3 focus-within:border-[#3e3e3e5f] focus-within:outline-none hover:border-[#3e3e3e5f] focus:border-[#3e3e3e5f]"
                  type="text"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  placeholder="123456"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="mb-[25px]">
                <h6 className="mb-[15px] text-[15px] font-medium text-[#222] leading-[1.3125] mt-0">
                  Phone
                </h6>
                <PhoneInput
                  country={"dz"}
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                  inputClass="form-control w-full border p-2 rounded-lg py-2 px-3 focus-within:border-[#3e3e3e5f] focus-within:outline-none hover:border-[#3e3e3e5f] focus:border-[#3e3e3e5f]"
                />
              </div>
            </div>
            <div className="col-sm-12">
              <div className="mb-[25px]">
                <h6 className="mb-[15px] text-[15px] font-medium text-[#222] leading-[1.3125] mt-0">
                  Email Address
                </h6>
                <input
                  className="form-control w-full border p-2 rounded-lg py-2 px-3 focus-within:border-[#3e3e3e5f] focus-within:outline-none hover:border-[#3e3e3e5f] focus:border-[#3e3e3e5f]"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="col-sm-12">
              <div className="mb-[25px]">
                <h6 className="mb-[15px] text-[15px] font-medium text-[#222] leading-[1.3125] mt-0">
                  Order Notes
                </h6>
                <textarea
                  className="form-control w-full border p-2 rounded-lg py-2 px-3 focus-within:border-[#3e3e3e5f] focus-within:outline-none hover:border-[#3e3e3e5f] focus:border-[#3e3e3e5f] !h-36"
                  value={orderNotes}
                  onChange={(e) => setOrderNotes(e.target.value)}
                  placeholder="Notes about your order, e.g. special notes for delivery."
                ></textarea>
              </div>
            </div>
            {/* <div className="col-sm-12">
              <button
                type="submit"
                className="!bg-green-600 text-white p-2 rounded-lg w-full"
              >
                Place Order
              </button>
            </div> */}
          </div>
        </form>
      </div>
    </div>
  );
}
