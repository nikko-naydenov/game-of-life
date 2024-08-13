import { TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

const IconButton = ({
  onPress,
  disabled = false,
  icon,
  style,
  color,
}: {
  icon: IconDefinition;
  disabled?: boolean;
  onPress: () => void;
  style?: any;
  color?: string;
}) => {
  return (
    <TouchableOpacity style={style} onPress={onPress} disabled={disabled}>
      <FontAwesomeIcon icon={icon} size={25} color={color} />
    </TouchableOpacity>
  );
};

export default IconButton;
