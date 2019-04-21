import { createStackNavigator } from 'react-navigation';
import Dashboard from '../screens/dashboard/Dashboard';

const DashboardNavigation = createStackNavigator({
    Dashboard: {
        screen: Dashboard,
        navigationOptions: {
            title: 'Dashboard'
        },
    }
});

export default DashboardNavigation;