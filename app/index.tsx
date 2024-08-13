import { Text, StyleSheet, ScrollView } from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  buildEmptyMatrix,
  buildMatrix,
  calculateNewGeneration,
} from "../utils/utils";
import GameField from "../components/GameField";
import GameControls from "../components/GameControls";
import CONFIG from "../config";
import { GameStatus, AppStatus } from "../utils/enums";
import Info from "../components/Info";
import useAppState from "../hooks/useAppState";
import Colors from "../utils/colors";

const Home = () => {
  const cols = CONFIG.cols;
  const rows = CONFIG.rows;

  const currentAppState = useAppState();

  const matrix = buildEmptyMatrix(rows, cols);

  const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.STOPPED);
  const [generationCount, setGenerationCount] = useState(0);
  const [liveCellsCount, setLiveCellsCount] = useState(0);
  const [generation, setGeneration] = useState<number[][]>(matrix);
  const isRunnigRef = useRef(false);

  const runSimulation = useCallback(() => {
    if (!isRunnigRef.current) {
      return;
    }

    setGeneration((prev) => {
      const newGeneration = calculateNewGeneration(prev, rows, cols);

      return newGeneration;
    });
    setGenerationCount((prev) => prev + 1);

    setTimeout(() => {
      runSimulation();
    }, CONFIG.speed);
  }, []);

  useEffect(() => {
    if (
      currentAppState === AppStatus.BACKGROUND &&
      gameStatus === GameStatus.RUNNING
    ) {
      handlePause();
    }
  }, [currentAppState]);

  const toggleCell = (x: number, y: number) => {
    const newState = [...generation];
    const isLiveCell = generation[x][y] ? 0 : 1;

    isLiveCell
      ? setLiveCellsCount((prev) => prev + 1)
      : setLiveCellsCount((prev) => prev - 1);

    newState[x][y] = isLiveCell;
    setGeneration(newState);
  };

  const handleStop = () => {
    setGameStatus(GameStatus.STOPPED);
    isRunnigRef.current = false;
    setGeneration(buildEmptyMatrix(rows, cols));
    setGenerationCount(0);
    setLiveCellsCount(0);
  };

  const handlePlay = () => {
    setGameStatus(GameStatus.RUNNING);
    isRunnigRef.current = true;
    runSimulation();
  };

  const handlePause = () => {
    setGameStatus(GameStatus.PAUSED);
    isRunnigRef.current = false;
  };

  const handlePausePlay = () => {
    if (gameStatus === GameStatus.PAUSED || gameStatus === GameStatus.STOPPED) {
      handlePlay();
    } else if (gameStatus === GameStatus.RUNNING) {
      handlePause();
    }
  };

  const handleSeed = () => {
    const { matrix, liveCellsCount } = buildMatrix(rows, cols);
    setGeneration(matrix);
    setLiveCellsCount(liveCellsCount);
  };

  const handleNextGeneration = () => {
    setGeneration((prev) => {
      const newGeneration = calculateNewGeneration(prev, rows, cols);
      return newGeneration;
    });
    setGenerationCount((prev) => prev + 1);
  };

  return (
    <>
      <Text style={styles.text}>Game of Life</Text>

      <GameField
        generation={generation}
        isEditable={gameStatus === GameStatus.STOPPED}
        toggleCell={toggleCell}
      />

      <Text style={styles.generationText}>Generation #{generationCount}</Text>

      <GameControls
        gameStatus={gameStatus}
        handlePausePlay={handlePausePlay}
        handleStop={handleStop}
        handleNextGeneration={handleNextGeneration}
        handleSeed={handleSeed}
        hasLiveCells={liveCellsCount > 0}
      />

      <ScrollView>
        <Info />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 10,
    color: Colors.BEIGE,
  },
  generationText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 20,
    marginBottom: 0,
    color: Colors.BEIGE,
  },
});

export default Home;
