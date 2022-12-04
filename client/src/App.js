import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import HomePage from 'sceans/homePage';
import LoginPage from 'sceans/loginPage';
import ProfilePage from 'sceans/profilePage';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/profile/:userId" element={<ProfilePage/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
