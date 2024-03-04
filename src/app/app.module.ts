import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { TopNavigatorComponent } from './header/top-navigator/top-navigator.component';
import { HeaderMainComponent } from './header/header-main/header-main.component';
import { HeaderInformationComponent } from './header/header-information/header-information.component';
import { AHrefsComponent } from './header/top-navigator/a-hrefs/a-hrefs.component';
import { LoginComponent } from './header/top-navigator/login/login.component';
import { HeaderLeftMainComponent } from './header/header-main/header-left-main/header-left-main.component';
import { HeaderImgComponent } from './header/header-main/header-img/header-img.component';
import { UsersComponent } from './header/header-information/users/users.component';
import { LocationsComponent } from './header/header-information/locations/locations.component';
import { ServersComponent } from './header/header-information/servers/servers.component';
import { FeaturesComponent } from './body/features/features.component';
import { FeatureImgComponent } from './body/features/feature-img/feature-img.component';
import { FeatureContentComponent } from './body/features/feature-content/feature-content.component';
import { HeaderIconComponent } from './header/top-navigator/header-icon/header-icon.component';
import { PlansComponent } from './body/plans/plans.component';
import { GlobalNetworkComponent } from './body/global-network/global-network.component';
import { CustomersCommentsComponent } from './body/customers-comments/customers-comments.component';
import { SubscribeComponent } from './body/subscribe/subscribe.component';
import { FooterAboutComponent } from './footer/footer-about/footer-about.component';
import { FooterProductComponent } from './footer/footer-product/footer-product.component';
import { FooterEngageComponent } from './footer/footer-engage/footer-engage.component';
import { FooterEarnComponent } from './footer/footer-earn/footer-earn.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    TopNavigatorComponent,
    HeaderMainComponent,
    HeaderInformationComponent,
    AHrefsComponent,
    LoginComponent,
    HeaderLeftMainComponent,
    HeaderImgComponent,
    UsersComponent,
    LocationsComponent,
    ServersComponent,
    FeaturesComponent,
    FeatureImgComponent,
    FeatureContentComponent,
    HeaderIconComponent,
    PlansComponent,
    GlobalNetworkComponent,
    CustomersCommentsComponent,
    SubscribeComponent,
    FooterAboutComponent,
    FooterProductComponent,
    FooterEngageComponent,
    FooterEarnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
