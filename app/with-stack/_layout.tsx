import {LayoutWrapper} from "@/components/LayoutWrapper";
import {Stack} from "expo-router";

export default function WithSlotLayout() {
    return (
        <LayoutWrapper>
            <Stack screenOptions={{headerShown: true}}>
                <Stack.Screen name="index" options={{title: 'WithStackIndex'}}/>
            </Stack>
        </LayoutWrapper>
    )
}
