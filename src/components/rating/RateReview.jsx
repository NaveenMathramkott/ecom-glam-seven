import "./rateStyle.css";

const RateReview = ({ rate, totalStar = 5 }) => {
  return (
    <div id="rate-mainWrapper">
      {[...Array(totalStar)].map((star, index) => {
        const currentRating = index + 1;

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={currentRating}
              id="rate-radio-input"
            />
            <span
              style={{
                color: currentRating <= rate ? "#FFC600" : "#C1C8CE",
              }}
              id="rate-star-style"
            >
              &#9733;
            </span>
          </label>
        );
      })}
    </div>
  );
};

export default RateReview;
