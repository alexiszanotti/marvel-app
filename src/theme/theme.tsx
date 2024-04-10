import { StyleSheet } from 'react-native';

export interface ThemeColors {
  title: string;
  subTitle: string;
  background: string;
  iconColors: string;
}

export const ligthColors: ThemeColors = {
  title: '#1d1d1d',
  subTitle: '#1d1d1d',
  background: '#eee',
  iconColors: 'black',
};

export const darkColors: ThemeColors = {
  title: '#eee',
  subTitle: '#eee',
  background: '#1d1d1d',
  iconColors: 'white',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    rowGap: 20,
    marginTop: 20,
  },
  headerContainer: {
    width: '100%',
    height: 80,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    paddingVertical: 10,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  subTitle: {
    fontSize: 18,
  },
});
