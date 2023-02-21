import { IAuthState } from './auth/types';
import { ICustomersListState } from './customers/types';
import { IProductsListState } from './products/types';
import { IPromotionsListState } from './promotions/types';
import { ICategoriesListState } from './categories/types';
import { IInventoryState } from './inventory/types';
import { IScheduleState } from './schedule/types';
import { IOrdersListState } from '@store/orders/types';
import { INotificationsState } from '@store/notifications/types';
import { IFiltersState } from '@store/filters/types';

export interface IRootState {
  auth: IAuthState;
  customers: ICustomersListState;
  products: IProductsListState;
  orders: IOrdersListState;
  categories: ICategoriesListState;
  inventory: IInventoryState;
  promotions: IPromotionsListState;
  schedule: IScheduleState;
  notifications: INotificationsState;
  filters: IFiltersState;
}
