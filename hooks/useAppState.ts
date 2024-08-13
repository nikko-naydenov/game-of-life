import { useEffect, useState } from "react";
import { AppState, AppStateStatus } from "react-native";

const useAppState = () => {
  const currentState = AppState.currentState;
  const [appState, setAppState] = useState(currentState);

  useEffect(() => {
    const onChange = (newState: AppStateStatus) => {
      setAppState(newState);
    };

    const subscription = AppState.addEventListener("change", onChange);

    return () => {
      subscription.remove();
    };
  }, []);

  return appState;
};

export default useAppState;
