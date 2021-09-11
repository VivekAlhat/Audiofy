import React from "react";
import Join from "./pages/Join";
import Room from "./pages/Room";
import {
  useHMSStore,
  selectIsConnectedToRoom,
} from "@100mslive/hms-video-react";

function App() {
  const isUserConnected = useHMSStore(selectIsConnectedToRoom);
  return <div className="App">{isUserConnected ? <Room /> : <Join />}</div>;
}

export default App;
