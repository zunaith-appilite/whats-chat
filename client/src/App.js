import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Home from "./components/Home";
import { useAuthStore } from "./components/store/authStore";
import { useEffect } from "react";

function App() {
  const { authUser, checkAuth, } = useAuthStore();
 

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  
  return (
    <div>
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to="/login" />}  />
        <Route
          path="/signup"
          element={!authUser ? <Signup /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!authUser ? <Signin /> : <Navigate to="/" />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
