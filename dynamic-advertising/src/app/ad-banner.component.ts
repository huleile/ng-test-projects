import { AdDirective } from "./ad.directive";
import { AdItem } from "./ad-item";
import { Component, OnInit, OnDestroy, Input, ViewChild, ComponentFactoryResolver } from "@angular/core";
import { AdComponent } from "./ad.component";

@Component({
    selector: "app-ad-banner",
    template: `
        <div class='ad-banner-example'>
            <h3>Advertisements</h3>
            <<ng-template appAdHost></ng-template>
        </div>
    `
})
export class AdBannerComponent implements OnInit, OnDestroy {
    @Input() ads: AdItem[];
    currentAdIndex = -1;
    @ViewChild(AdDirective, {static: true}) adHost: AdDirective;
    interval: any;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

    ngOnInit() {
        this.loadComponent();
        this.getAds();
    }

    ngOnDestroy() {
        clearInterval(this.interval);
    }

    loadComponent() {
        this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
        const adItem = this.ads[this.currentAdIndex];
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
        const viewContainerRef = this.adHost.viewContainerRef;
        viewContainerRef.clear();
        const componentRef = viewContainerRef.createComponent(componentFactory);
        (componentRef.instance as AdComponent).data = adItem.data;
    }

    getAds() {
        this.interval = setInterval(() => {
            this.loadComponent();
        }, 2000);
    }
}
