import { createNavigationContainerRef } from '@react-navigation/native';
import Detalhes  from './src/telas/Detalhes';

export const navigationRef = createNavigationContainerRef()

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}