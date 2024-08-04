import * as yup from 'yup';

export const registerFormSchemas = yup.object().shape({
    email: yup.string().email("Geçerli mail adresi giriniz").required("Email boş bırakılamaz"),

    age: yup.number().positive("Pozitif değer giriniz").integer("Tam sayı giriniz").required("Yaş alanı zorunlu"),

    password: yup.string().required("şifre alanı zorunlu "),

    confirmPassword: yup.string().required("Şifre tekrarı zorunlu").oneOf([yup.ref('password', yup.password)], 'şifreler eşleşmiyor'),

    term: yup.boolean().required("Lütfen sözleşme şartlarını onaylayınız!! ")
})