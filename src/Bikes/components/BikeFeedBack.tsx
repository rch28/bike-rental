import React from "react";

const BikeFeedBack = () => {
  const feedbackList = [
    {
      id: 1,
      rating: 4,
      comment: "This bike is amazing! I love it",
      user: "John Doe",
    },
  ];
  return (
    <div className="mt-10 bg-gray-100 p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold text-primary mb-4">User Feedback</h2>
      {feedbackList.length > 0 ? (
        <ul className="space-y-4">
          {feedbackList.map(
            (feedback: {
              id: number;
              rating: number;
              comment: string;
              user: string;
            }) => (
              <li
                key={feedback.id}
                className="p-4 bg-white rounded-md shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-neutral-700">
                  {feedback.user} rated it {feedback.rating}/5
                </h3>
                <p className="text-neutral-600">{feedback.comment}</p>
              </li>
            )
          )}
        </ul>
      ) : (
        <p className="text-neutral-600">
          No feedback available yet. Be the first to share your thoughts!
        </p>
      )}
    </div>
  );
};

export default BikeFeedBack;
