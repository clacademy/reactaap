import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import React,{ useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { themeSettings } from "./theme";
import Layout from "./scenes/layout";
import DashBoard from "./scenes/dashboard";
import Dieticians from "./scenes/dieticians";
import Steward from "./scenes/stewards";
import AddDietician from "./scenes/addDietician";
import AddDoctor from "./scenes/addDoctor";
import AddPatient from "./scenes/addPatient";


function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<DashBoard />} />
              <Route path="/dieticians" element={<Dieticians />} />
              <Route path="/steward" element={<Steward />} />   
              <Route path="/add-dietician" element={<AddDietician />} />       
              <Route path="/add-patient" element={<AddPatient />} />       
              <Route path="/add-doctor" element={<AddDoctor />} />                  
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
