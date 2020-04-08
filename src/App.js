import React from "react";
import "./styles.css";

// import CounterView from "./views/counter-view";
import ContactView from "./views/contact-view";

function App() {
  return (
    <div className="container-outer">
      {/* <CounterView /> */}
      <ContactView />
    </div>
  );
}

export default App;
