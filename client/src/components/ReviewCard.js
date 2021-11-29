import React from "react";

const ReviewCard = ({ review }) => {
  const rating = Array.from(Array(parseInt(review.rating)).keys());

  return (
    <div className="review mx-3 shadow-sm p-4">
      <h5>{review.fullName}</h5>
      <p>{review.review}</p>

      {rating.map((r) => (
        <i className="fas fa-star"></i>
      ))}
    </div>
  );
};

export default ReviewCard;
