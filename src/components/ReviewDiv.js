import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchReviews } from "../actions/reviewActions";

const ReviewDiv = (props) => {
  let newReviews = [];

  if (props.reviews !== undefined) {
    let reviews = props.reviews;
    for (let review in reviews) {
      newReviews.push(review);
      console.log(newReviews);
    }
  }

  return (
    <div className="products__review-container">
      {newReviews.map((review, i) => {
        return (
          <div key={i} className="products__review-block">
            <div className="products__review-author">Anonymous</div>
            <div className="products__review-content">{review.content}</div>
          </div>
        );
      })}

      <form className="products__review-form">
        {/* onSubmit = this.postReview function */}
        <textarea
          className="products__review-field"
          type="text"
          placeholder="Submit a review"
        ></textarea>
        <button className="products__review-submit">Submit</button>
      </form>
    </div>
  );
};

//Todo - get data from backend, set to this.state.reviews

//todo Post review function

//Todo, possible Edit/Delete functions

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReviews: () => dispatch(fetchReviews()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewDiv);
