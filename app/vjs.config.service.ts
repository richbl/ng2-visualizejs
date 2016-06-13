import {Injectable} from '@angular/core';

@Injectable()

export class VJSConfig {

  userAuth = {
    name: "joeuser",
    password: "joeuser",
    organization: "organization_1",
  };

  resourceDetails = [{
    id: "dashboard_one",
    type: "dashboard",
    uri: "/public/Samples/Dashboards/1._Supermart_Dashboard",
    params: {}
  }, {
      id: "dashboard_two",
      type: "dashboard",
      uri: "/public/Samples/Dashboards/2._Performance_Summary_Dashboard",
      params: {}
    }, {
      id: "dashboard_three",
      type: "dashboard",
      uri: "/public/Samples/Dashboards/3.1_Sales_Metrics",
      params: {}
    }];
    
};
