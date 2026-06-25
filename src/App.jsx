import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Folder from "./pages/Folder";
import Profile from "./pages/Profile";

import { useUser } from "./context/UserContext";

function App() {

    const { user } = useUser();

    return (

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Navigate to="/login" />} />

                <Route
                    path="/login"
                    element={
                        user
                            ? <Navigate to="/dashboard" />
                            : <Login />
                    }
                />

                <Route
                    path="/register"
                    element={
                        user
                            ? <Navigate to="/dashboard" />
                            : <Register />
                    }
                />

                <Route
                    path="/dashboard"
                    element={
                        user
                            ? <Dashboard />
                            : <Navigate to="/login" />
                    }
                />

                <Route
                    path="/folder/:id"
                    element={
                        user
                            ? <Folder />
                            : <Navigate to="/login" />
                    }
                />

                <Route
                    path="/profile"
                    element={
                        user
                            ? <Profile />
                            : <Navigate to="/login" />
                    }
                />

                <Route path="*" element={<Navigate to="/login" />} />

            </Routes>

        </BrowserRouter>

    );
}

export default App;