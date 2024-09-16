// App.js

import React from "react";
import "./App.css";
// import MainComponent from "./components/MainComponent"; // Updated import statement
import Navbar from "./components/Navbar";
// import RestaurantOrders from "./components/RestaurantOrders"; // Import RestaurantOrders
import NoOrder from "./components/NoOrder";
// import PayableAmount from "./components/PayableAmount";
import MainComponent1 from "./components/MainComponent1";
// import MainComponent2 from "./components/MainComponent2";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App flex flex-col h-screen">
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 ml-32 flex flex-col">
          <Navbar />
          <main className="flex-1 flex">
            {/* Left Component (Main Component) */}
            {/* <MainComponent /> */}
            <MainComponent1 />
            {/* <MainComponent2 /> */}

            {/* Right Component (Restaurant Orders) */}
            <div className="w-1/3 pb-4 pr-4 pl-4">
              {/* <RestaurantOrders /> */}
              <NoOrder />
              {/* <PayableAmount /> */}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
