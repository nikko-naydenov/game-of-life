import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faAsterisk,
  faForwardStep,
  faPause,
  faPlay,
  faSeedling,
  faStop,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Colors from "../utils/colors";

const Info = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Legend:</Text>

      <View style={styles.colWrapper}>
        <View style={styles.leftCol}>
          <View style={styles.row}>
            <FontAwesomeIcon icon={faSeedling} size={20} color={Colors.BEIGE} />
            <Text style={styles.text}>- Seed Live</Text>
          </View>
          <View style={styles.row}>
            <FontAwesomeIcon icon={faStop} size={20} color={Colors.BEIGE} />
            <Text style={styles.text}>- Stop and Reset</Text>
          </View>
          <View style={styles.row}>
            <FontAwesomeIcon icon={faPlay} size={20} color={Colors.BEIGE} />
            <Text style={styles.text}>/</Text>
            <FontAwesomeIcon icon={faPause} size={20} color={Colors.BEIGE} />
            <Text style={styles.text}>- Play / Pause</Text>
          </View>
        </View>
        <View style={styles.rightCol}>
          <View style={styles.row}>
            <FontAwesomeIcon
              icon={faForwardStep}
              size={20}
              color={Colors.BEIGE}
            />
            <Text style={styles.text}>- Next Generation</Text>
          </View>
          <View style={styles.row}>
            <FontAwesomeIcon icon={faTrash} size={20} color={Colors.BEIGE} />
            <Text style={styles.text}>- Reset</Text>
          </View>
          <View style={styles.row}>
            <FontAwesomeIcon icon={faAsterisk} size={10} color={Colors.BEIGE} />
            <Text
              style={[styles.text, styles.textInfo]}
              lineBreakMode="middle"
              numberOfLines={2}
            >
              Tap on cell to bring live
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
    width: "90%",
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.BEIGE,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  colWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
  },
  leftCol: {
    flex: 1,
  },
  rightCol: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    marginLeft: 5,
    color: Colors.BEIGE,
  },
  textInfo: {
    fontSize: 14,
    color: Colors.BEIGE,
  },
});
