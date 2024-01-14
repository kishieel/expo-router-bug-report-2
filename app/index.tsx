import {Button, View} from "react-native";
import {router} from "expo-router";

export default function RootIndex() {
    return (
        <View style={{padding: 16, gap: 16}}>
            <Button title={'Go to /with-slot'} onPress={() => router.push('/with-slot')}/>
            <Button title={'Go to /with-stack'} onPress={() => router.push('/with-stack')}/>
        </View>
    )
}
