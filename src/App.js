import "./App.css";
import Header from "./components/Header";
import Footer from './components/Footer';
import AppStateProvider from "./providers/AppStateProviders";

function App() {
  return (
    // 가장 상위 컴포넌트에 프로바이더하여 전역 상태 관리
    <AppStateProvider>
      <div className="App">
        <Header />
			  <Footer />
      </div>
    </AppStateProvider>
  );
}

export default App;
