import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./pages/HomeScreen/HomeScreen";
import { Routes, Route } from "react-router-dom";
import LoginScreen from "./pages/LoginScreen/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { logout, login, selectUser } from "./features/counter/userSlice";
import ProfileScreen from "./pages/ProfileScreen/ProfileScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsuscribe;
  }, [dispatch]);

  return (
    <div className="App">
      {!user ? (
        <LoginScreen />
      ) : (
        <Routes>
          <Route exact path="/profile" element={<ProfileScreen />} />
          <Route exact path="/" element={<HomeScreen />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
