import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Metrics from "./pages/Metrics";
import { MfiContextProvider } from "./context/MfiContext";

function App() {
  return (
    <BrowserRouter>
      <MfiContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Detail />} />
          <Route path="/:id/metrics" element={<Metrics />} />
        </Routes >
      </MfiContextProvider>
    </BrowserRouter>
  )
}

export default App