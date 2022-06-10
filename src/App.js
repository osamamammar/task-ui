import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./globalStyles";
import { SnippingPage } from "./screens";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SnippingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
