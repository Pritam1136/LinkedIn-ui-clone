/* eslint-disable no-unused-vars */
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* App body */}
      <div className="app_body">
        {/* sidebar */}
        <Sidebar />

        {/* feed */}

        {/* widges */}
      </div>
    </div>
  );
}

export default App;
