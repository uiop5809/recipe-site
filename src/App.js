import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AppStateProvider from "./providers/AppStateProviders";
import Korean from "./routes/Korean";
import Chinese from "./routes/Chinese";
import Japanese from "./routes/Japanese";
import Western from "./routes/Western";
import Home from "./routes/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createGlobalStyle } from "styled-components";
import { Reset } from "styled-reset";
import Ingredient from "./routes/Ingredient.js";
import Step from "./routes/Step.js";
import Search from "./routes/Search.js";
import SearchBarDetail from "./components/SearchBarDetail";

const GlobalStyle = createGlobalStyle`
body {
	background: #fff;
}
`;

function App() {
  return (
    // 가장 상위 컴포넌트에 프로바이더하여 전역 상태 관리
    <BrowserRouter>
      <AppStateProvider>
        <Reset />
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/korean" element={<Korean />} />
          <Route path="/chinese" element={<Chinese />} />
          <Route path="/japanese" element={<Japanese />} />
          <Route path="/western" element={<Western />} />
          <Route path="/ingredient/:id" element={<Ingredient />} />
          <Route path="/step/:id" element={<Step />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/:id" element={<SearchBarDetail />} />
        </Routes>
        <Footer />
      </AppStateProvider>
    </BrowserRouter>
  );
}

export default App;
