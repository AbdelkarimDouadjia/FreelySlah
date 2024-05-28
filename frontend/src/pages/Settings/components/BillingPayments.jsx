import React, { useState, useEffect } from "react";
import { State, City, Country } from "country-state-city";

const BillingPayments = () => {
  const [isAddingBillingMethod, setIsAddingBillingMethod] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const [tempCountry, setTempCountry] = useState("");
  const [tempState, setTempState] = useState("");
  const [tempCity, setTempCity] = useState("");
  const [tempZipCode, setTempZipCode] = useState("");
  const [tempAddress, setTempAddress] = useState("");
  const [tempCardNumber, setTempCardNumber] = useState("");
  const [tempFirstName, setTempFirstName] = useState("");
  const [tempLastName, setTempLastName] = useState("");
  const [tempExpMonth, setTempExpMonth] = useState("");
  const [tempExpYear, setTempExpYear] = useState("");
  const [tempSecurityCode, setTempSecurityCode] = useState("");

  const [statesData, setStatesData] = useState([]);
  const [citiesData, setCitiesData] = useState([]);
  const [countriesData, setCountriesData] = useState([]);

  const [billingMethods, setBillingMethods] = useState([]);

  useEffect(() => {
    setCountriesData(Country.getAllCountries());
  }, []);

  useEffect(() => {
    if (tempCountry) {
      setStatesData(State.getStatesOfCountry(tempCountry));
    } else {
      setStatesData([]);
    }
  }, [tempCountry]);

  useEffect(() => {
    if (tempState) {
      setCitiesData(City.getCitiesOfState(tempCountry, tempState));
    } else {
      setCitiesData([]);
    }
  }, [tempState, tempCountry]);

  const handleAddBillingMethodClick = () => {
    setIsAddingBillingMethod(true);
  };

  const handleCancelClick = () => {
    setIsAddingBillingMethod(false);
    setSelectedPaymentMethod("");
  };

  const handlePaymentMethodChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
  };

  const handleSaveClick = () => {
    const newBillingMethod = {
      cardNumber: tempCardNumber.slice(-4),
      firstName: tempFirstName,
      lastName: tempLastName,
      expMonth: tempExpMonth,
      expYear: tempExpYear,
      address: tempAddress,
      country: tempCountry,
      state: tempState,
      city: tempCity,
      zipCode: tempZipCode,
    };

    setBillingMethods([...billingMethods, newBillingMethod]);

    setTempCountry("");
    setTempState("");
    setTempCity("");
    setTempZipCode("");
    setTempAddress("");
    setTempCardNumber("");
    setTempFirstName("");
    setTempLastName("");
    setTempExpMonth("");
    setTempExpYear("");
    setTempSecurityCode("");
    setSelectedPaymentMethod("");
    setIsAddingBillingMethod(false);
  };

  const handleRemoveBillingMethod = (index) => {
    const updatedBillingMethods = billingMethods.filter((_, i) => i !== index);
    setBillingMethods(updatedBillingMethods);
  };

  const isFormValid = () => {
    return (
      tempCardNumber &&
      tempFirstName &&
      tempLastName &&
      tempExpMonth &&
      tempExpYear &&
      tempSecurityCode &&
      tempAddress &&
      tempCountry &&
      tempState &&
      tempCity &&
      tempZipCode
    );
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl tracking-tighter font-medium mb-4">
        Billing & payments
      </h2>
      <div className="bg-white shadow-sm border border-[#D9D9D9] rounded-2xl p-7 mb-7">
        <h3 className="text-2xl font-medium tracking-tighter mb-4">
          Manage billing methods
        </h3>
        {billingMethods.length === 0 ? (
          <p className="text-gray-600 mb-6 leading-5">
            You haven&apos;t set up any billing methods yet. Your billing method
            will be charged only when your available balance from Upwork
            earnings is not sufficient to pay for your monthly membership and/or
            Connects.
          </p>
        ) : (
          <div>
            {billingMethods.map((method, index) => (
              <div
                key={index}
                className="flex justify-between items-center mb-4"
              >
                <div>
                  <span className="mr-2">
                    <i className="fab fa-cc-visa"></i>
                  </span>
                  Visa ending in {method.cardNumber}
                  <div className="text-gray-600 text-sm">
                    Your primary billing method is used for all recurring
                    payments.
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleRemoveBillingMethod(index)}
                    className="text-red-600 mr-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <button
          onClick={handleAddBillingMethodClick}
          className="text-green-600 font-medium hover:underline text-lg"
        >
          <span className="text-2xl font-light">+</span> Add a billing method
        </button>
      </div>

      {isAddingBillingMethod && (
        <div className="bg-white shadow-sm border border-[#D9D9D9] rounded-2xl p-7 mb-7">
          <h3 className="text-2xl font-medium tracking-tighter mb-4">
            Add a billing method
          </h3>
          <button
            onClick={handleCancelClick}
            className="text-green-600 border border-green-600 rounded-lg px-4 py-2 mb-4 hover:bg-green-50"
          >
            Cancel
          </button>
          <div>
            <div>
              <div className="mb-4">
                <input
                  type="radio"
                  name="payment-method"
                  value="card"
                  checked={selectedPaymentMethod === "card"}
                  onChange={handlePaymentMethodChange}
                  className="mr-2"
                />
                <label htmlFor="payment-card" className="text-gray-700 font-medium text-lg">
                  Payment card
                </label>
                <p className="text-gray-600 text-sm ml-6">
                  Visa, Mastercard, American Express, Discover, Diners
                </p>
              </div>
              <div className="mb-4">
                <input
                  type="radio"
                  name="payment-method"
                  value="paypal"
                  checked={selectedPaymentMethod === "paypal"}
                  onChange={handlePaymentMethodChange}
                  className="mr-2"
                />
                <label
                  htmlFor="paypal"
                  className="text-gray-700 inline-flex items-center text-lg font-medium"
                >
                  <img
                    src="https://www.paypalobjects.com/webstatic/icon/pp258.png"
                    alt="PayPal"
                    className="h-6 mr-2 align-middle"
                  />
                  PayPal
                </label>
              </div>
            </div>
            {selectedPaymentMethod === "card" && (
              <div className="mt-6">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="card-number"
                  >
                    Card number
                  </label>
                  <input
                    className="w-full border p-2 rounded-lg py-2 px-3 focus-within:border-[#3e3e3e5f] focus-within:outline-none hover:border-[#3e3e3e5f] focus:border-[#3e3e3e5f]"
                    id="card-number"
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    value={tempCardNumber}
                    onChange={(e) => setTempCardNumber(e.target.value)}
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
                    placeholder="First name"
                    value={tempFirstName}
                    onChange={(e) => setTempFirstName(e.target.value)}
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
                    placeholder="Last name"
                    value={tempLastName}
                    onChange={(e) => setTempLastName(e.target.value)}
                  />
                </div>
                <div className="mb-4 grid grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="exp-month"
                    >
                      Expiration month
                    </label>
                    <input
                      className="w-full border p-2 rounded-lg py-2 px-3 focus-within:border-[#3e3e3e5f] focus-within:outline-none hover:border-[#3e3e3e5f] focus:border-[#3e3e3e5f]"
                      id="exp-month"
                      type="text"
                      placeholder="MM"
                      value={tempExpMonth}
                      onChange={(e) => setTempExpMonth(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="exp-year"
                    >
                      Expiration year
                    </label>
                    <input
                      className="w-full border p-2 rounded-lg py-2 px-3 focus-within:border-[#3e3e3e5f] focus-within:outline-none hover:border-[#3e3e3e5f] focus:border-[#3e3e3e5f]"
                      id="exp-year"
                      type="text"
                      placeholder="YYYY"
                      value={tempExpYear}
                      onChange={(e) => setTempExpYear(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="security-code"
                  >
                    Security code
                  </label>
                  <input
                    className="w-full border p-2 rounded-lg py-2 px-3 focus-within:border-[#3e3e3e5f] focus-within:outline-none hover:border-[#3e3e3e5f] focus:border-[#3e3e3e5f]"
                    id="security-code"
                    type="text"
                    placeholder="CVV"
                    value={tempSecurityCode}
                    onChange={(e) => setTempSecurityCode(e.target.value)}
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
                    placeholder="Address"
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
                    placeholder="Zip Code"
                    value={tempZipCode}
                    onChange={(e) => setTempZipCode(e.target.value)}
                  />
                </div>
              </div>
            )}
            {selectedPaymentMethod === "paypal" && (
              <div className="mt-6">
                <p className="text-gray-700">
                  You will be redirected to PayPal to complete your purchase
                  securely.
                </p>
              </div>
            )}
            {selectedPaymentMethod && (
              <button
                onClick={handleSaveClick}
                className="px-5 py-2 !bg-[#0E9F6E] text-white rounded-3xl hover:bg-[#046c4e] mr-5"
                disabled={!isFormValid()}
              >
                Save
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BillingPayments;
