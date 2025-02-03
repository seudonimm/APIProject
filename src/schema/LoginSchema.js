import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
    firstName: yup
        .string()
        .required('First Name Required'),
    lastName: yup
        .string()
        .required('Password Required'),
    age: yup
        .number()
        .required('Age Required'),
    info:yup
        .string()
        .required('Info Required')
}); 