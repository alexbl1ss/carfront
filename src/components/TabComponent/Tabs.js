import React, { useState } from "react";
//import FirstTab from "../AllTabs/FirstTab";
//import SecondTab from "../AllTabs/SecondTab";
import Carlist from "../AllTabs/Carlist";
import OwnerList from "../AllTabs/Ownerlist";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("cars");
  
    //  Functions to handle Tab Switching
    const handlecars = () => {
        // update the state to cars
        setActiveTab("cars");
    };
    const handleowners = () => {
        // update the state to owners
        setActiveTab("owners");
    };
  
    return (
        <div className="Tabs">
            {/* Tab nav */}
            <ul className="nav">
                <li
                    className={activeTab === "cars" ? "active" : ""}
                    onClick={handlecars}>
                Cars
                </li>
                <li
                    className={activeTab === "owners" ? "active" : ""}
                    onClick={handleowners}>
                Owners
                </li>
            </ul>
            <div className="outlet">
                {activeTab === "cars" ? <Carlist /> : <OwnerList />}
            </div>
        </div>
  );
};
export default Tabs;