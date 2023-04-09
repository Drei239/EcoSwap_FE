import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = React.createContext();
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export default function AppProvider({ children }) {
  const navigate = useNavigate();
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [eventModalVisible, setEventModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const { width, height } = useWindowDimensions();
  const [center, setCenter] = useState({lat: 0, lng: 0});
  const betweenPagesNav = ({ componentId }) => {
    navigate("/home");
    const productElement = document.getElementById(componentId);
    productElement.scrollIntoView();
  }
  const commonBreakPoint = [320, 480, 768, 1024, 1025, 1200];
  return (
    <AppContext.Provider
      value={{
        addModalVisible,
        setAddModalVisible,
        openSuccessModal,
        setOpenSuccessModal,
        width,
        height,
        commonBreakPoint,
        eventModalVisible,
        setEventModalVisible,
        loading,
        setLoading,
        betweenPagesNav,
        center,
        setCenter
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
