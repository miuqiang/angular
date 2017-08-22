// 兼容老版本浏览器
import './polyfills.ts';
// 关闭开发者模式
import { enableProdMode } from '@angular/core';
// 告诉ng使用哪个模块来启动
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// 主模块
import { AppModule } from './app/app.module';
// 环境配置
import { environment } from './environments/environment';

// 如果是生产环境，调用enableProdMode来关闭开发模式
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
