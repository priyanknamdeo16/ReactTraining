import CustomerForm from '../components/customers/customerFormComponent';
import CustomersList from '../components/customerslist/customerslist';

const Routes = {
    'CUSTOMERS_ADD_EDIT' : {
        path: '/customers/addEditCustomer',
        component: CustomerForm
    },
    'CUSTOMERS_LIST' : {
        path: '/customers',
        component: CustomersList
    }
};

export default Routes;