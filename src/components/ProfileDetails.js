import React from "react";
import { connect } from "react-redux";


const ProfileDetails = props => {

    const firstName = props.firstName;
    const lastName = props.lastName;

    const transactions = Object.values(props.transactions);
    const transactionArray = [];
    transactions.forEach(transaction => transactionArray.push(transaction.products))
    // console.log(transactionsArray);
    // console.log(newArray);
    // newArray.map(trans => {
    //     trans.map(inst => console.log(inst))
    // })

    const productsObj = props.productsList;
    console.log(productsObj);

    return (
        <>
            <div className="profile__userinfo">
                <div>{firstName} {lastName}</div>
            </div>
            <div className="profile__orderinfo">
                <div className="profile__myorder">My Orders</div>
                {transactionArray.map(transaction => {
                    return (
                        <div className="profile__transaction">
                            {transaction.map(instance => {
                                return (
                                    <div>{productsObj[instance].name}</div>
                                );
                            })}
                        </div>
                    )
                })}
            </div>
        </>
    );
}


const mapStateToProps = state => {
    return {
        transactions: state.transactions,
        productsList: state.products,
        firstName: state.session.firstName,
        lastName: state.session.lastName
    };
};

export default connect(
    mapStateToProps,
    null
)(
    ProfileDetails
);