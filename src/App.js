import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import MainPage from "./Pages/MainPage/MainPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
function App() {
	return (
		<Router>
			<Routes>
				<Route index path="/login" element={<LoginPage />} />
				<Route path="/" element={<MainPage />} />
				<Route path="/profile" element={<ProfilePage />} />
			</Routes>
		</Router>
	);
}

export default App;
