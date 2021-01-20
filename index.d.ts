declare module 'react-native-low-power-mode' {
  const _default: {
    isLowPowerModeEnabled: () => Promise<boolean>;
    setLowPowerModeListener: (listener: (isLowPowerModeEnabled: boolean) => void) => void;
    removeLowPowerModeListener: () => void;
  };
  export default _default;
}
