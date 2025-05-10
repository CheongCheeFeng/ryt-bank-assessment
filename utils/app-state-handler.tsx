import { useEffect } from "react";

import { AppState, AppStateStatus } from "react-native";

import { useAuth } from "@/utils/authContext";

const AppStateHandler = () => {
  const { logOut } = useAuth();

  useEffect(() => {
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      if (nextAppState === "background") {
        logOut();
      }
    };

    const subscription = AppState.addEventListener(
      "change",
      handleAppStateChange,
    );

    return () => {
      subscription.remove();
    };
  }, [logOut]);

  return null;
};

export default AppStateHandler;
