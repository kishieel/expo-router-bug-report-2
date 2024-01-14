import {Text} from "react-native";
import {Stack} from "expo-router";

export default function WithSlotIndex() {
    return (
        <>
            <Stack.Screen options={{headerShown: true, title: 'WithSlotIndex'}}/>
            <Text>Hello</Text>
        </>
    )
}
