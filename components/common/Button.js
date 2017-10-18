
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    fontSize: 13,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    color: 'yellow'
  },
  buttonStyle: {
    flex: 1,
    // backgroundColor: '#fff',
    // borderRadius: 5,
    // borderWidth: 1,
    // borderColor: '#007aff',
    marginLeft: 20,
    marginRight: 20,
  }
}

export { Button };

