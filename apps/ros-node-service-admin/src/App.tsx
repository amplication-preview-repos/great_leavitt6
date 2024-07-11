import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TrackedObjectList } from "./trackedObject/TrackedObjectList";
import { TrackedObjectCreate } from "./trackedObject/TrackedObjectCreate";
import { TrackedObjectEdit } from "./trackedObject/TrackedObjectEdit";
import { TrackedObjectShow } from "./trackedObject/TrackedObjectShow";
import { VehicleStateList } from "./vehicleState/VehicleStateList";
import { VehicleStateCreate } from "./vehicleState/VehicleStateCreate";
import { VehicleStateEdit } from "./vehicleState/VehicleStateEdit";
import { VehicleStateShow } from "./vehicleState/VehicleStateShow";
import { CriticMetricList } from "./criticMetric/CriticMetricList";
import { CriticMetricCreate } from "./criticMetric/CriticMetricCreate";
import { CriticMetricEdit } from "./criticMetric/CriticMetricEdit";
import { CriticMetricShow } from "./criticMetric/CriticMetricShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ROSNodeService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="TrackedObject"
          list={TrackedObjectList}
          edit={TrackedObjectEdit}
          create={TrackedObjectCreate}
          show={TrackedObjectShow}
        />
        <Resource
          name="VehicleState"
          list={VehicleStateList}
          edit={VehicleStateEdit}
          create={VehicleStateCreate}
          show={VehicleStateShow}
        />
        <Resource
          name="CriticMetric"
          list={CriticMetricList}
          edit={CriticMetricEdit}
          create={CriticMetricCreate}
          show={CriticMetricShow}
        />
      </Admin>
    </div>
  );
};

export default App;
