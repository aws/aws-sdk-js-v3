import { Component, RendererComponent } from "typedoc/dist/lib/output/components";
import { RendererEvent } from "typedoc/dist/lib/output/events";
import { NavigationPlugin } from "typedoc/dist/lib/output/plugins";

@Component({ name: "SdkClientRemoveNavigator" })
export class SdkClientRemoveNavigatorPlugin extends RendererComponent {
  private navigationPlugin: NavigationPlugin;

  initialize() {
    this.navigationPlugin = <any>this.owner.application.renderer.getComponent("navigation");
    this.listenTo(this.owner, {
      [RendererEvent.BEGIN]: this.onRenderedBegin,
    });
  }

  onRenderedBegin(event: RendererEvent) {
    const navigationItem = this.navigationPlugin.navigation;
    if (!navigationItem) {
      return;
    }
    navigationItem.children = [];
  }
}
