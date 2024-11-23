"use client";
import { Rating } from "../types/bikeApiTypes";
import getBikeList from "../services/getBikeList";

const BikeFeedBack = ({ bikeId }: { bikeId: string }) => {
  const { data, isFetching } = getBikeList(bikeId);
  return (
    <div className="mt-10 bg-gray-100 p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold text-primary mb-4">User Feedback</h2>
      {isFetching ? (
        <p>Loading...</p>
      ) : data?.ratings ? (
        <ul className="space-y-4">
          {data?.ratings?.map((feedback: Rating) => (
            <li
              key={feedback.id}
              className="p-4 bg-white rounded-md shadow-sm border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-neutral-700 flex justify-between items-center">
                <span>
                  {feedback.user.first_name} {feedback.user.last_name}
                </span>
                <span>{feedback.rating}/5</span>
              </h3>
              <p className="text-neutral-600 capitalize">{feedback.comment}</p>
            </li>
          ))}
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
