import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import {
    getLoginIsLoading,
} from 'features/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading';

describe('getLoginError.test', () => {
    test('return true', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    });

    test('return false', () => {
        const state: DeepPartial<StateSchema> = {
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});
