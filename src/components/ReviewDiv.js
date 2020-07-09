import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchReviews } from "../actions/reviewActions";

const ReviewDiv = (props) => {
  let reviews = {};

  let newReviews = [];

  if (props.reviews !== undefined) {
    reviews = props.reviews;

    Object.values(reviews).forEach((item) => {
      newReviews.push(item)
    })
    
    

  }

  console.log(newReviews)

  if(newReviews.length === 0) return(
    <div className="products__review-container">
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
  )


  return (
    <div className="products__review-container">
      {newReviews.map((review, i) => {
        return (
          <div key={i} className="products__review-block">
            <div className="products__review-author">{`${review.firstName} ${review.lastName}`}</div>
            <div className="products__review-content">{review.reviewBody}</div>
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
