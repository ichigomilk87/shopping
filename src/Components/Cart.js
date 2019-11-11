import React, { Component } from "react";
import { connect } from "react-redux";
// import initCartState from "./reducers/cartReducer";


class Cart extends Component {
    render(){
        console.log(this.props);
        return(
            <div className = "cartContainer">
                <h1>Shopping Cart</h1>
                <output>{JSON.stringify(this.props.items)}</output>
            </div>
        );  
    }
};


const mapStateToProps = (state)=>{
    return {
        items: state.items
    }
}

export default connect(mapStateToProps, null)(Cart);