import React, { useContext, useState, useEffect } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import newRequest from "../../utils/newRequest";

const Overview = () => {
  const [selectedBlock, setSelectedBlock] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const [orders, setOrders] = useState({
    workInProgress: [],
    inReview: [],
    pending: [],
    available: [],
  });
  const [buyers, setBuyers] = useState({});

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await newRequest.get("/orders", {
          headers: {
            Authorization: `Bearer ${currentUser.token}`,
          },
        });
        const completedOrders = response.data.filter(
          (order) => order.isCompleted
        );
        const categorizedOrders = {
          workInProgress: completedOrders.filter(
            (order) => order.status === "progress"
          ),
          inReview: completedOrders.filter(
            (order) => order.status === "review"
          ),
          pending: completedOrders.filter(
            (order) => order.status === "pending"
          ),
          available: completedOrders.filter(
            (order) => order.status === "completed"
          ),
        };
        setOrders(categorizedOrders);

        const buyerIds = completedOrders.map((order) => order.buyerId);
        const uniqueBuyerIds = [...new Set(buyerIds)];
        const buyersData = {};

        await Promise.all(
          uniqueBuyerIds.map(async (id) => {
            const res = await newRequest.get(`/users/${id}`);
            buyersData[id] = res.data;
          })
        );

        setBuyers(buyersData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchOrders();
  }, [currentUser.token]);

  const renderCards = () => {
    if (!selectedBlock) {
      return null;
    }
    return orders[selectedBlock].map((order) => {
      const buyer = buyers[order.buyerId];
      return (
        <div key={order._id} className="mb-5">
          <div className="relative w-full bg-white rounded-xl shadow overflow-hidden border border-[#EAECEE]">
            <div className="flex justify-between items-center px-8 pt-8">
              <div className="md:flex ">
                <div className="pt-0">
                  <div className="uppercase text-xl text-black font-semibold w-fit">
                    {order.title}
                  </div>
                  <p className="block mt-1 text-xs leading-tight font-medium text-[#77859A]">
                    <span className="font-bold">{order.category}</span> - Est.
                    Time: {order.duration}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex flex-col space-y-3 items-end">
                <Link
                  to="/projectprogress"
                  className="ud-btn btn-light-thm !bg-[#5bbb7b1a] !text-[#5bbb7b] flex justify-center items-center hover:!text-white font-medium !w-52"
                >
                  View Progress
                  <FaArrowRightLong className="ml-[10px] -rotate-45" />
                </Link>
                <Link
                  className="ud-btn btn-thm bg-[#5bbb7b] border-2 border-[#5bbb7b] text-white flex justify-center items-center !w-52"
                  to="/messages"
                >
                  Contact Client
                </Link>
              </div>
            </div>
            <div className="p-6 pt-0">
              <div className="mt-0 flex items-center">
                <div className="text-sm text-gray-500 mr-4">
                  <FaRegUserCircle className="inline-block text-gray-700 mr-2 align-middle text-lg" />
                  Client:{" "}
                  {buyer ? `${buyer.fname} ${buyer.lname}` : "Loading..."} (ID:{" "}
                  {order.buyerId})
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="w-full mx-auto min-[576px]:max-w-[540px] min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] min-[1400px]:max-w-[1320px] px-4 py-16 min-h-screen">
      <h1 className="text-5xl font-medium mb-8">Overview</h1>
      <div className="flex justify-around mb-6 border-b border-gray-300">
        <button
          className={`px-4 py-2 ${
            selectedBlock === "workInProgress"
              ? "text-green-600 border-b-2 border-green-600 font-medium"
              : "text-gray-400"
          }`}
          onClick={() => setSelectedBlock("workInProgress")}
        >
          <h2 className="text-lg font-semibold text-green-600">
            Work in progress
          </h2>
          <p className="text-2xl font-bold">
            $
            {orders.workInProgress
              .reduce((acc, order) => acc + order.price, 0)
              .toFixed(2)}
          </p>
        </button>
        <button
          className={`px-4 py-2 ${
            selectedBlock === "inReview"
              ? "text-gray-600 border-b-2 border-gray-600 font-medium"
              : "text-gray-400"
          }`}
          onClick={() => setSelectedBlock("inReview")}
        >
          <h2 className="text-lg font-semibold text-gray-600">In review</h2>
          <p className="text-2xl font-bold">
            $
            {orders.inReview
              .reduce((acc, order) => acc + order.price, 0)
              .toFixed(2)}
          </p>
        </button>
        <button
          className={`px-4 py-2 ${
            selectedBlock === "pending"
              ? "text-yellow-600 border-b-2 border-yellow-600 font-medium"
              : "text-gray-400"
          }`}
          onClick={() => setSelectedBlock("pending")}
        >
          <h2 className="text-lg font-semibold text-yellow-600">Pending</h2>
          <p className="text-2xl font-bold">
            $
            {orders.pending
              .reduce((acc, order) => acc + order.price, 0)
              .toFixed(2)}
          </p>
        </button>
        <button
          className={`px-4 py-2 ${
            selectedBlock === "available"
              ? "text-gray-800 border-b-2 border-gray-800 font-medium"
              : "text-gray-400"
          }`}
          onClick={() => setSelectedBlock("available")}
        >
          <h2 className="text-lg font-semibold text-gray-800">Available</h2>
          <p className="text-2xl font-bold">
            $
            {orders.available
              .reduce((acc, order) => acc + order.price, 0)
              .toFixed(2)}
          </p>
          <p className="text-sm text-gray-600">Last payment: $0.00</p>
        </button>
      </div>
      <div>{renderCards()}</div>
      <div className="mt-8 text-center text-gray-600">
        <p>Note: this report is updated every hour.</p>
      </div>
      {!selectedBlock && (
        <div className="mt-12 text-center text-gray-600">
          <p>You have no work in progress</p>
        </div>
      )}
    </div>
  );
};

export default Overview;
