import * as Yup from "yup";

export const userSchema = Yup.object().shape({
  name: Yup.string().required("Ad alanı zorunludur"),
  email: Yup.string()
    .email("Geçerli bir e-posta adresi girin")
    .required("E-posta alanı zorunludur"),
  password: Yup.string()
    .required("Şifre alanı zorunludur")
    .min(8, "Şifre en az 8 karakter olmalıdır"),
});
