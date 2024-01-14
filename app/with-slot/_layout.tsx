import {LayoutWrapper} from "@/components/LayoutWrapper";
import {Slot} from "expo-router";

export default function WithSlotLayout() {
    return (
        <LayoutWrapper>
            <Slot screenOptions={{ headerShown: true }} />
        </LayoutWrapper>
    )
}
