import React, { createContext, useContext, useState } from "react"

const routeDefault = "";
const RouteNameContext = createContext({ routeName: routeDefault, setRouteName: undefined})

const RouteNameConsumer = RouteNameContext.Consumer;
const useRouteName = () => useContext(RouteNameContext);

const RouteNameProvider = ({ children }) => {
  const [routeName, setRouteName] = useState(routeDefault);

  return (
    <RouteNameContext.Provider value={{ routeName, setRouteName }}>
      {children}
    </RouteNameContext.Provider>
  );
};


export { RouteNameConsumer, useRouteName, RouteNameProvider, RouteNameContext }