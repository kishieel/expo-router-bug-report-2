import {PropsWithChildren} from "react";
import {Text, View} from "react-native";

export function LayoutWrapper({children}: PropsWithChildren) {
    return <View>
        <Text style={{textAlign: 'center'}}>LAYOUT START</Text>
        {children}
        <Text style={{textAlign: 'center'}}>LAYOUT END</Text>
    </View>
}
