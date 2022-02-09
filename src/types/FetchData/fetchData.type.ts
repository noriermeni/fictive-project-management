import {AxiosError} from "axios";

export interface FetchDataType<T> {
    error: AxiosError | undefined;
    loading: boolean;
    data: T | undefined;
}