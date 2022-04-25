import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AppStateProvider from './providers/AppStateProviders';
import Home from './routes/Home';

function App() {
	return (
		// 가장 상위 컴포넌트에 프로바이더하여 전역 상태 관리
		<BrowserRouter>
			<AppStateProvider>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</AppStateProvider>
		</BrowserRouter>
	);
}

export default App;
