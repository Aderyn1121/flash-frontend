import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchReviews } from "../actions/reviewActions";
import {baseUrl} from '../config'

const ReviewDiv = (props) => {
  let reviews = {};
  let newReviews = [];

  let [userRev, createRev] = useState('');

  if (props.reviews !== undefined) {
    reviews = props.reviews;

    Object.values(reviews).forEach((item) => {
      newReviews.push(item)
    })
    
    

  }

  const handleReview = (e) => {
    createRev(e.target.value)
  }

  const handleSubmit = async (e) => {
    
    e.preventDefault()

     let userId = props.sessionId
     let firstName = props.firstName
     let lastName = props.lastName
     let productId = props.id
     let reviewBody = userRev
    

    const res = await fetch(`${baseUrl}/api/reviews/${props.id}`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({userId, firstName, lastName, productId, reviewBody})
    })

    console.log(res)
  }


  if(newReviews.length === 0 && !props.firstName) return null;

  if(newReviews.length === 0) return(
    <div className="products__review-container">
      <form className="products__review-form">
      {/* onSubmit = this.postReview function */}
      <textarea
        onChange={handleReview}
        className="products__review-field"
        type="text"
        placeholder="Submit a review"
      ></textarea>
      <button onClick={handleSubmit} className="products__review-submit">Submit</button>
    </form>
  </div>
  )

  if(!props.firstName && newReviews.length > 0) return(
    <div className="products__review-container">
      {newReviews.map((review, i) => {
        return (
          <div key={i} className="products__review-block">
            <div className="products__review-author">{`${review.firstName} ${review.lastName}`}</div>
            <div className="products__review-content">{review.reviewBody}</div>
          </div>
        );
      })}
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
          onChange={handleReview}
          className="products__review-field"
          type="text"
          placeholder="Submit a review"
        ></textarea>
        <button onClick={handleSubmit} className="products__review-submit">Submit</button>
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
    sessionId: state.session.id,
    firstName: state.session.firstName,
    lastName: state.session.lastName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReviews: () => dispatch(fetchReviews()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewDiv);
