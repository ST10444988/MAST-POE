// app/components/ThemedText.tsx
import React from 'react';
import { Text, TextProps } from 'react-native';

export const ThemedText: React.FC<TextProps> = (props) => {
  return <Text {...props}>{props.children}</Text>;
};
