import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import Routers from "./src/Routers/Routers";

export default function App(){
  return(
    <NavigationContainer>
    <Routers/>
    </NavigationContainer>
  )
}