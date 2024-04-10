import { View } from 'react-native';
import SwitchWithIcons from "react-native-switch-with-icons";

interface Props {
  isEnable: boolean;
  onChange: (value: boolean) => void;
}

const iconSwitch = {
  true: require('../../assets/sun.png'),
  false: require('../../assets/moon.png'),
};

export const SwitchTheme = ({ isEnable, onChange }: Props) => {
  return (
    <View>
      <SwitchWithIcons
        value={isEnable}
        onValueChange={onChange}
        icon={iconSwitch}
        iconColor={{true: 'white', false: 'black'}}
        trackColor={{true: '#ccc', false: 'gray'}}
        thumbColor={{true: 'gray', false: '#ccc'}}
      />
    </View>
  );
};