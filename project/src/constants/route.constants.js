import CustomerForm from '../components/customers/customerFormComponent';
import CustomersList from '../components/customerslist/customerslist';
import SettingsComponent from '../components/settings/settings';
import ManageAdminView from '../components/manageAdmin/manageAdminView/ManageAdminView';

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
        component: ManageAdminView
    }
};

export default Routes;