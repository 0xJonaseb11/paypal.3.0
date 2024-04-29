import "./App.css";
import logo from "./logo.png";
import { Layout, Button } from "antd";
import CurrentBalance from "./componets/CurrentBalance";
import RequestAndPay from "./componets/RequestAndPay";
import AccountDetails from "./componets/AccountDetails";
import RecentActivity from "./componets/RecentActivity";

import { useConnect, useAccount, useDisconnect } from "wagmi";
import { MetamaskConnector } from "wagmi/connectors/metamask";

import axios from "axios";
import { useState, useEffect, useSyncExternalStore } from "react";


const { Header, Content } = Layout;

function App() {

  const [name, setName] = useState("...");
  const [balance, setBalance] = useState("...");
  const [dollars, setDollars] = useState("...");
  const [history, setHistory] = useState(null);
  const [requests, setRequests] = useState({"1": [0], "0": []});

  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { connect } = useConnect({
    connector: new MetamaskConnector(),
  });

  const disconnectAndSetNull = () => {
    disconnect();
  };

  const getNameAndBalance = async () => {
    const res = await axios.get(`http://localhost:8080/getNameAndBalance`, {
      params: { userAddress: address}
    })
  }

  return (
    <div className="App">
      <Layout>
        <Header className="header">
          <div className="headerLeft">
            <img src={logo} alt="logo" className="logo" />
            {isConnected && (
              <>
                <div
                  className="menuOption"
                  style={{ borderBottom: "1.5px solid black" }}
                >
                  Summary
                </div>
                <div className="menuOption">Activity</div>
                <div className="menuOption">{`Send & Request`}</div>
                <div className="menuOption">Wallet</div>
                <div className="menuOption">Help</div>
              </>
            )}
          </div>

          {isConnected ? (
            <Button type={"primary"} onClick={disconnectAndSetNull()}>
              Disconnect wallet
            </Button>
          ) : (
            <Button type={"primary"} onClick={connect()}>
              Connect Wallet
            </Button>
          )}
        </Header>
        <Content className="content">
          {isConnected ? (
            <>
              <div className="firstColumn">
                <CurrentBalance />
                <RequestAndPay />
                <AccountDetails />
              </div>
              <div className="secondColumn">
                <RecentActivity />
              </div>
            </>
          ) : (
            <div>Please login</div>
          )}
        </Content>
      </Layout>
    </div>
  );
}

export default App;