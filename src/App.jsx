import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FlightBooking from "./pages/FlightBooking";
import Login from "./pages/Login";

// Pages
// import FlightBooking from "./pages/FlightBooking";
// import Login from "./pages/Login";
// import OrdersList from "./pages/OrdersList";

// import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedRoute from "./components/ProtectedRoute"
import Navbar from "./components/Navbar";
import OrdersList from "./pages/OrdersList";
import UserProfile from "./pages/UserProfile";
// import UserProfile from "./pages/UserProfile";

const App = () => {
  return (
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>

        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<FlightBooking/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route
              path='/orders'
              element={
                <ProtectedRoute>
                  <OrdersList  />
                </ProtectedRoute>
              }
            />
            <Route
              path='/profile'
              element={
                <ProtectedRoute>
                  <UserProfile />
                </ProtectedRoute>
              }
            />


           </Routes>
          <ToastContainer />
        </Router>
      </LocalizationProvider>
    </Provider>
  );
};

export default App;
