import { View, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import React from "react";
import CONFIG from "../config";
import Colors from "../utils/colors";

const screenWidth = Dimensions.get("window").width;

const GameField = ({
  generation,
  isEditable,
  toggleCell,
}: {
  generation: number[][];
  isEditable: boolean;
  toggleCell: (x: number, y: number) => void;
}) => {
  return (
    <View>
      {generation.map((row, i) => {
        return (
          <View style={styles.row} key={i}>
            {row.map((cell, j) => {
              return isEditable ? (
                <TouchableOpacity
                  key={`${i}-${j}-${cell}`}
                  onPress={() => {
                    toggleCell(i, j);
                  }}
                >
                  <View
                    style={[styles.cell, cell ? styles.life : styles.death]}
                  />
                </TouchableOpacity>
              ) : (
                <View
                  key={`${i}-${j}-${cell}`}
                  style={[styles.cell, cell ? styles.life : styles.death]}
                />
              );
            })}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  cell: {
    borderWidth: 1,
    borderColor: Colors.BLACK,
    width: screenWidth / CONFIG.cols,
    height: screenWidth / CONFIG.rows,
  },
  life: {
    backgroundColor: Colors.BEIGE,
  },
  death: {
    backgroundColor: Colors.GREY,
  },
});

export default GameField;
