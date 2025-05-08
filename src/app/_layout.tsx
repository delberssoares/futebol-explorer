import { Stack } from "expo-router";

export default function Layout(){
    return(
        <Stack
        screenOptions={
            {
                headerStyle: {
                    backgroundColor: "#121212",
                },
                headerTintColor: "#FFF",
                headerTitleAlign: "center", 
            }
        }
        >
            <Stack.Screen name="index" options={{title: "Times"}}  />
            <Stack.Screen name="teamDetail" options={{ title: "Detalhes do Time" }} />
            <Stack.Screen name="compareTeams" options={{ title: "Comparação - Títulos" }} />
            <Stack.Screen name="teamTitles" options={{ title: "Títulos" }} />
            <Stack.Screen name="teamArtilheiros" options={{ title: "Principais artilheiros" }} />
        </Stack>
    )
}