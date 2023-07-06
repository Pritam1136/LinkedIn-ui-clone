/* eslint-disable no-unused-vars */
import Feed from "./components/Feed";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="a">
      <div className="app">
        {/* Header */}
        <Header />
      </div>
      {/* App body */}

      <div className="app_body">
        <Sidebar />

        <Feed />

        {/* widges */}
      </div>
    </div>
  );
}

export default App;
