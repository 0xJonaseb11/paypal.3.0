import React from "react";
import { Card } from "antd";
import { UserOutlined } from "@ant-design/icons";
import matic from "../matic.png";


<<<<<<< HEAD
function AccountDetails({}) {
=======
function AccountDetails({address, name, balance}) {
>>>>>>> ce5d293 (rebased --reolve)
  

  return (
    <Card title="Account Details" style={{ width: "100%" }}>
      <div className="accountDetailRow">
        <UserOutlined style={{ color: "#767676", fontSize: "25px" }} />
        <div>
<<<<<<< HEAD
          <div className="accountDetailHead"> Moralis Mage </div>
          <div className="accountDetailBody">
            {" "}
            Address: 0x12...3456
=======
          <div className="accountDetailHead"> {name} </div>
          <div className="accountDetailBody">
            {" "}
            Address: {address.slice(0, 4)}...{address.slice(38)}
>>>>>>> ce5d293 (rebased --reolve)
          </div>
        </div>
      </div>
      <div className="accountDetailRow">
        <img src={matic} alt="maticLogo" width={25} />
        <div>
          <div className="accountDetailHead"> Native Matic Tokens</div>
<<<<<<< HEAD
          <div className="accountDetailBody">100.32 Matic</div>
=======
          <div className="accountDetailBody">{balance} Matic</div>
>>>>>>> ce5d293 (rebased --reolve)
        </div>
      </div>
      <div className="balanceOptions">
        <div className="extraOption">Set Username</div>
        <div className="extraOption">Switch Accounts</div>
      </div>
    </Card>
  );
}

export default AccountDetails;
