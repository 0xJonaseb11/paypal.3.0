import React from "react";
import { Card } from "antd";

<<<<<<< HEAD
function CurrentBalance({}) {
  return (
    <Card title="Current Balance" style={{ width: "100%" }}>
      <div className="currentBalance">
        <div style={{ lineHeight: "70px" }}>$ 121.12</div>
=======
function CurrentBalance({dollars}) {
  return (
    <Card title="Current Balance" style={{ width: "100%" }}>
      <div className="currentBalance">
        <div style={{ lineHeight: "70px" }}>$ {dollars}</div>
>>>>>>> ce5d293 (rebased --reolve)
        <div style={{ fontSize: "20px" }}>Available</div>
      </div>
      <div className="balanceOptions">
        <div className="extraOption">Swap Tokens</div>
        <div className="extraOption">Bridge Tokens</div>
      </div>
    </Card>
  );
}

export default CurrentBalance;
