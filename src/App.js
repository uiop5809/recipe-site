import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AppStateProvider from './providers/AppStateProviders';
import Korean from './routes/Korean';
import Chinese from './routes/Chinese';
import Japanese from './routes/Japanese';
import Western from './routes/Western';
import Home from './routes/Home';
import NavLinks from './components/NavLinks';

function App() {
	return (
		// 가장 상위 컴포넌트에 프로바이더하여 전역 상태 관리
		<BrowserRouter>
			<AppStateProvider>
				<NavLinks />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/korean" element={<Korean />} />
					<Route path="/chinese" element={<Chinese />} />
					<Route path="/japanese" element={<Japanese />} />
					<Route path="/western" element={<Western />} />
				</Routes>
			</AppStateProvider>
		</BrowserRouter>
	);
}

export default App;
