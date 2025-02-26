import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

const Items = () => {
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <div className="mt-5">
      <h2>Deposite/Withdraw Money</h2>
      <button
        className="btn btn-primary mx-2"
        onClick={() => withdrawMoney(100)}
      >
        -
      </button>
      <span>Update Balance</span>
      <button
        className="btn btn-primary mx-2"
        onClick={() => depositMoney(100)}
      >
        +
      </button>
    </div>
  );
};

export default Items;
