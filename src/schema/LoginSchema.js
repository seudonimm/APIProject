import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
    username: yup
        .string()
        .required('Username Required'),
    password: yup
        .string()
        .min(8, ({min}) => `Password should be at least ${min} characters`)
        .required('Password Required')
});