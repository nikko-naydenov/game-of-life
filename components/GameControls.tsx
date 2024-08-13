import { View, StyleSheet } from "react-native";
import React from "react";

import {
  faForwardStep,
  faPause,
  faPlay,
  faSeedling,
  faStop,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import IconButton from "./IconButton";
import Colors from "../utils/colors";
import { GameStatus } from "../utils/enums";

const GameControls = ({
  handleNextGeneration,
  handlePausePlay,
  handleStop,
  handleSeed,
  hasLiveCells,
  gameStatus,
}: {
  handlePausePlay: () => void;
  handleStop: () => void;
  handleNextGeneration: () => void;
  handleSeed: () => void;
  hasLiveCells: boolean;
  gameStatus: GameStatus;
}) => {
  return (
    <View style={styles.wrapper}>
      <IconButton
        color={Colors.BEIGE}
        style={[
          styles.button,
          gameStatus !== GameStatus.STOPPED && styles.disabledButton,
        ]}
        disabled={gameStatus !== GameStatus.STOPPED}
        onPress={handleSeed}
        icon={faSeedling}
      />

      <IconButton
        color={Colors.BEIGE}
        style={[
          styles.button,
          gameStatus === GameStatus.STOPPED && styles.disabledButton,
        ]}
        disabled={gameStatus === GameStatus.STOPPED}
        onPress={handleStop}
        icon={faStop}
      />
      <IconButton
        color={Colors.BEIGE}
        disabled={!hasLiveCells}
        onPress={handlePausePlay}
        icon={gameStatus === GameStatus.RUNNING ? faPause : faPlay}
        style={[
          gameStatus === GameStatus.RUNNING && styles.pauseButton,
          gameStatus ===
            (GameStatus.PAUSED || gameStatus === GameStatus.STOPPED) &&
            styles.playButton,
          styles.button,
          !hasLiveCells && styles.disabledButton,
        ]}
      />
      <IconButton
        color={Colors.BEIGE}
        disabled={gameStatus !== GameStatus.PAUSED}
        onPress={handleNextGeneration}
        icon={faForwardStep}
        style={[
          gameStatus !== GameStatus.PAUSED && styles.disabledButton,
          styles.button,
        ]}
      />

      <IconButton
        color={Colors.BEIGE}
        disabled={gameStatus !== GameStatus.STOPPED || !hasLiveCells}
        onPress={handleStop}
        icon={faTrash}
        style={[
          styles.button,
          styles.lastIcon,
          (gameStatus !== GameStatus.STOPPED || !hasLiveCells) &&
            styles.disabledButton,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: "auto",
    flexDirection: "row",
    height: 50,
    borderWidth: 1,
    borderColor: Colors.BEIGE,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    padding: 40,
    width: "90%",
    borderRadius: 25,
  },
  button: {
    borderWidth: 1,
    borderColor: Colors.BEIGE,
    width: 45,
    height: 45,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
  playButton: {
    color: "green",
    paddingLeft: 5,
    marginRight: 20,
  },
  forwardButton: {},
  disabledButton: {
    opacity: 0.3,
  },
  pauseButton: {
    color: "green",
  },
  lastIcon: {
    marginRight: 0,
  },
});

export default GameControls;
