import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import { styled } from "styled-components";
import SideBsr from "./SideBsr";
import Chat from "./Chat";

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Header />
          <AppBody>
            <SideBsr />
            <Routes>
                {/* <Route path="/" element={<Chat />}/> */}
                {/* <Route path="/" exact/>
                <Chat /> */}
            </Routes>
            <Chat />
          </AppBody>
        </>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
