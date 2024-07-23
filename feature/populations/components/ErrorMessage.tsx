import { ErrorResponse } from '@/types';
import { AxiosError } from 'axios';
import React from 'react';

interface ErrorMessageProps {
    error: AxiosError<ErrorResponse, any> | null
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
    const getMessage = () => {
        if (error && error.response) {
            switch (error.response.status) {
                case 400:
                    return '都道府県を選択してください';
                case 404:
                    return 'データが見つかりませんでした';
                default:
                    return 'エラーが発生しました';
            }
        }
        return 'エラーが発生しました';
    };

    return <p>{getMessage()}</p>;
};

export default ErrorMessage;
