import {createStackNavigator,createAppContainer} from 'react-navigation';
import Home from '../screens/home/Home';
import Register from '../screens/Register/Register';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';
import UpdateProfile from '../screens/UpdateProfile/UpdateProfile';
import QuizScreen from '../screens/QuizScreen/QuizHome';
import DrawerNav from './_DrawerNavigator';
import Congrats from '../screens/Congrats/congrats';

const RootNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    },
    DrawerNav: {
        screen: DrawerNav,
        navigationOptions: {
            header: null
        }
    },
    QuizScreen: {
        screen: QuizScreen,
        navigationOptions: {
            title: 'Random Quiz'
        }
    },
    Congrats: {
        screen: Congrats,
        navigationOptions: {
            header: null
        }
    },

    Register: {
        screen: Register,
        navigationOptions: {
            title: 'Sign up'
        }
    },
    ForgotPassword: {
        screen: ForgotPassword,
        navigationOptions: {
            title: 'Forgot Password'
        }
    },
    UpdateProfile: {
        screen: UpdateProfile,
        navigationOptions: {
            title: 'Edit Profile'
        }
    }
});

const AppContainer = createAppContainer(RootNavigator);

export default AppContainer;