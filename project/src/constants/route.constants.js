import CustomerForm from '../components/customers/customerFormComponent';
import CustomersList from '../components/customerslist/customerslist';
import SettingsComponent from '../components/settings/settings';

const Routes = {
    'CUSTOMERS_ADD_EDIT' : {
        path: '/customers/addEditCustomer',
        component: CustomerForm
    },
    'CUSTOMERS_LIST' : {
        path: '/customers',
        component: CustomersList
    },
    'CUSTOMERS_SETTINGS': {
        path: '/settings',
        component: SettingsComponent
    }
};

export default Routes;