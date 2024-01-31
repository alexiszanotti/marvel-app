import { ActivityIndicator, View } from 'react-native';

const Slider = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
      <ActivityIndicator color="gray" />
    </View>
  );
};

export default Slider;
