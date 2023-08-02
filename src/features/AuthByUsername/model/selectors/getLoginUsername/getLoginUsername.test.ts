import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import {
    getLoginUsername,
} from 'features/AuthByUsername/model/selectors/getLoginUsername/getLoginStateUsername';

describe('getLoginError.test', () => {
    test('return true', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'her',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('her');
    });

    test('return false', () => {
        const state: DeepPartial<StateSchema> = {
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
