import React, { useState } from "react";

const Feedback = () => {
  const [selectedRating, setSelectedRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };

  const handleSubmit = () => {
    if (selectedRating) {
      setSubmitted(true);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      {!submitted ? (
        <div className="bg-gray-800 p-6 rounded-lg text-white w-80">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-blue-950 rounded-full flex items-center justify-center text-xl font-bold mr-2">
              <img className="z-10" src="./assets/Star.png" alt="" />
            </div>
            <h2 className="text-2xl font-semibold">How did we do?</h2>
          </div>
          <p className="text-gray-400 mb-4">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="flex justify-between mb-6">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                key={rating}
                onClick={() => handleRatingClick(rating)}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold ${
                  selectedRating === rating
                    ? "bg-gray-500 text-white"
                    : "bg-gray-700 text-gray-300"
                } hover:bg-gray-600`}
              >
                {rating}
              </button>
            ))}
          </div>
          <button
            onClick={handleSubmit}
            disabled={!selectedRating}
            className={`w-full py-2 rounded-md text-lg font-semibold ${
              selectedRating
                ? "bg-orange-500 text-white hover:bg-orange-600"
                : "bg-gray-500 text-gray-300 cursor-not-allowed"
            }`}
          >
            Submit
          </button>
        </div>
      ) : (
        <div className="bg-gray-800 p-6 rounded-lg text-white w-80 text-center">
          <img
            className="ml-12"
            src="./assets/Online payment_Two Color(1).png"
            alt=""
          />
          <div className="">
            <p className="text-lg font-semibold mb-2 text-orange-600">
              You selected {selectedRating} out of 5
            </p>
          </div>
          <h2 className="text-2xl font-semibold mb-4">Thank you!</h2>
          <p className="text-gray-400">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </p>
        </div>
      )}
    </div>
  );
};

export default Feedback;
