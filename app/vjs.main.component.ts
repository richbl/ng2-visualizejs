import {Component, Attribute} from '@angular/core';
import {VJSConfig} from './vjs.config.service';

declare var visualize: any;

@Component({
  selector: 'vjs-component',
  template: '<div id="{{resourceId}}"></div>',
})

export class VisualizeJS {

  constructor( @Attribute('id') id: string, public vjsConfig: VJSConfig) {

    var resourceIndex: number = this.getObjectIndex(vjsConfig.resourceDetails, id);
    var resourceId: string = vjsConfig.resourceDetails[resourceIndex].id;

    this.drawResource(vjsConfig, resourceIndex);

  };

  public drawResource(vjsConfig, resourceIndex) {

    visualize({
      auth: vjsConfig.userAuth
    }, function(v) {

      switch (vjsConfig.resourceDetails[resourceIndex].type) {

        case "report": {
          v("#" + vjsConfig.resourceDetails[resourceIndex].id).report({
            resource: vjsConfig.resourceDetails[resourceIndex].uri,
            params: vjsConfig.resourceDetails[resourceIndex].params,
            success: function() { console.log("success") },
            error: function(err) { alert("Report draw failed: " + err) }
          });
          break;
        }

        case "dashboard": {
          v("#" + vjsConfig.resourceDetails[resourceIndex].id).dashboard({
            resource: vjsConfig.resourceDetails[resourceIndex].uri,
            params: vjsConfig.resourceDetails[resourceIndex].params,
            success: function() { console.log("success") },
            error: function(err) { alert("Dashboard draw failed: " + err) }
          });
          break;
        }

        default: {
          alert("Visualize.js resource type not found.");
        }

      };
    },
      function(err) {
        alert("Visualize.js could not authenticate user/password.");
      });
  };

  private getObjectIndex(object: any, id: any): number {
    return object.map(function(x) { return x.id; }).indexOf(id);
  };

}
