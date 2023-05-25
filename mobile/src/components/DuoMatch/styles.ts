import { ThemeProvider } from '@react-navigation/native';
import { FinnTheHuman } from 'phosphor-react-native';
import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';
import { Background } from '../Background';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.OVERLAY
  },
  discord: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR
  },
  content: {
    width: 311,
    backgroundColor: THEME.COLORS.SHAPE,
    borderRadius: 8,
    justifyContent:'center',
    alignItems: 'center'
  },
  closeIcon: {
    alignSelf: 'flex-end',
    margin: 16,
  }, 
  label: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    marginTop:24,
    marginBottom: 8
  },
  dicordButton: {
    width: 231,
    height: 48,
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginBottom: 32,
  }
});