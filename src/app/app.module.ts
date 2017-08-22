import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StartsComponent } from './starts/starts.component';

//装饰器
@NgModule({
	// 声明模块中需要的东西（组件、指令、管道）
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    StartsComponent
  ],
  imports: [
    BrowserModule
  ],
  // 只能声明服务
  providers: [],
  // 声明模块的主组件
  bootstrap: [AppComponent]
})
export class AppModule { }
