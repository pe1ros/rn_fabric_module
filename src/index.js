import { requireNativeComponent } from 'react-native'

const isFabricEnabled = !!global?.nativeFabricUIManager;

const coloredView = isFabricEnabled ?
    require("./ColoredViewNativeComponent").default :
    requireNativeComponent("ColoredView");

export default coloredView;