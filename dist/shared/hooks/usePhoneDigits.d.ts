import React from 'react';
import { MuiTelInputContinent } from '../constants/continents';
import { MuiTelInputCountry } from '../constants/countries';
import { MuiTelInputInfo } from '../../index.types';
declare type UsePhoneDigitsParams = {
    value: string;
    onChange?: (value: string, info: MuiTelInputInfo) => void;
    defaultCountry?: MuiTelInputCountry;
    forceCallingCode?: boolean;
    splitCallingCode?: boolean;
    disableFormatting?: boolean;
    excludedCountries?: MuiTelInputCountry[];
    onlyCountries?: MuiTelInputCountry[];
    continents?: MuiTelInputContinent[];
};
declare type State = {
    inputValue: string;
    isoCode: MuiTelInputCountry | null;
};
declare type GetInitialStateParams = {
    defaultCountry?: MuiTelInputCountry;
    initialValue: string;
    disableFormatting?: boolean;
    splitCallingCode?: boolean;
};
export declare function getInitialState(params: GetInitialStateParams): State;
export default function usePhoneDigits({ value, onChange, defaultCountry, forceCallingCode, splitCallingCode, onlyCountries, excludedCountries, continents, disableFormatting }: UsePhoneDigitsParams): {
    inputValue: string;
    isoCode: import("libphonenumber-js").CountryCode | null;
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onCountryChange: (newCountry: MuiTelInputCountry) => void;
    inputRef: React.RefObject<HTMLInputElement>;
};
export {};
