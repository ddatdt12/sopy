import React, {FC} from 'react';
import {useSelector} from 'react-redux';
import {IRootState} from '../store';
import {IAuthState} from '../store/authSlice';
import AuthNavigator from './AuthNavigator';
import ExpertStackNavigator from './expert/ExpertStackNavigator';

const AppNavigator: FC = ({children}) => {
    const auth = useSelector<IRootState, IAuthState>(state => state.auth);

    // if (auth.token) {
    if (true) {
        return <ExpertStackNavigator />;
    }
    return <AuthNavigator />;
};

export default AppNavigator;
