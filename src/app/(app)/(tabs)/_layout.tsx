import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign"
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Image } from "react-native";

function Layout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{
                headerShown: false, title: "Home",
                tabBarIcon: ({ color, size }) => (
                    <AntDesign name="home" color={color} size={size} />
                ),
            }}
            />

            <Tabs.Screen name="excercises" options={{
                headerShown: false, title: "Excercises",
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="arm-flex-outline" size={size} color={color} />
                ),
            }}
            />

             <Tabs.Screen name="workout" options={{
                headerShown: false, title: "Workout",
                tabBarIcon: ({ color, size }) => (
                  <AntDesign name="pluscircle" color={color} size={size} />
                ),
            }}
            />

             <Tabs.Screen name="active-workout" options={{
                headerShown: false, title: "Active Workout", href : null,
                tabBarStyle: {
                    display: "none"
                }
            }}
            />

              <Tabs.Screen name="history" options={{
                headerShown: false, title: "History",
                tabBarIcon: ({ color, size }) => (
                    <AntDesign name="clockcircleo" color={color} size={size} />
                ),
            }}
            />


              <Tabs.Screen name="profile" options={{
                headerShown: false, title: "Profile",
                // tabBarIcon: ({ color, size }) => (
                //    <Image 
                //    source={user?.imageurl ?? user?.externalAccount[0]?.imageurl}
                //    className="rounded-full"
                //    style={{width: 28, height: 28, borderRadius:100}}
                //    />
                // ),
            }}
            />
        </Tabs>
    )
}

export default Layout;