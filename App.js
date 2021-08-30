// In App.js in a new project
import "react-native-gesture-handler";
import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
function HomeScreen({ navigation }) {
    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "red",
            }}
        >
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate("Details")}
            />
        </View>
    );
}
function DetailsScreen({ navigation }) {
    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "orange",
            }}
        >
            <Text>Details Screen</Text>
            <Button
                title="Go to Overview"
                onPress={() => navigation.navigate("Home")}
            />
        </View>
    );
}
const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: "Overview" }}
                />
                <Stack.Screen
                    name="Details"
                    component={DetailsScreen}
                    options={{ title: "Details" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
