import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import {
    getLoginPassword,
} from 'features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword';

describe('getLoginError.test', () => {
    test('return true', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: 'her',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('her');
    });

    test('return false', () => {
        const state: DeepPartial<StateSchema> = {
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
