import CustomerForm from '../components/customers/customerFormContainer';
import CustomersList from '../components/customerslist/customerslist';
import SettingsComponent from '../components/settings/settings';
import ManageAdmin from '../components/manageAdmin/manageAdminContainer';

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
    },
    'ADMIN_ADD_EDIT': {
        path: '/customers/addEditAdmin',
        component: ManageAdmin
    }
};

export default Routes;