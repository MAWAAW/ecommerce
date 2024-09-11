import {Routes} from '@angular/router';
import { ProductsComponent } from './products/products.component';
import {DetailsComponent} from './details/details.component';
import { HomeComponent } from './home/home.component';


const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Product page',
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Product details',
    },
  ];
  export default routeConfig;