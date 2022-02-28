import * as Yup from 'yup'
import { validationMessages } from '../../../../constants/formik'
import { PublicRoles } from '../../../../constants/roles'

export const validationSchema = Yup.object({
  name: Yup.string().required(validationMessages.required),
  email: Yup.string()
    .email(validationMessages.invalid.replace('$', 'Email'))
    .required(validationMessages.required),
  phone: Yup.string().required(validationMessages.required),
  legalId: Yup.string().max(20, validationMessages.maxLength.replace('$', '20')).required(validationMessages.required),
  profile: Yup.string().required(validationMessages.required),
  password: Yup.string()
    .min(5, validationMessages.minLength.replace('$', '5'))
    .max(20, validationMessages.maxLength.replace('$', '20'))
})

export const initialValues = {
  name: '',
  email: '',
  phone: '',
  legalId: '',
  status: 'authorized',
  profile: 'Estudiante',
  password: '',
}

export const formCreateFields = {
  name: 'Nombre',
  legalId: "Cédula",
  phone: "Teléfono",
  profile: {
    label: 'Tipo de usuario',
    id: 'name',
    values: PublicRoles,
    default: 'Estudiante',
    type: 'select',
    required: true
  },
  email: 'Correo electrónico',
  password: {
    type: 'password',
    label: 'Contraseña',
    required: false
  },
}

export const formUpdateFields = {
  name: 'Nombre',
  legalId: {
    type: "text",
    name: "legalId",
    label: "Cédula",
    readonly: true
  },
  phone: "Teléfono",
  profile: {
    label: 'Tipo de usuario',
    id: 'name',
    values: PublicRoles,
    default: 'Estudiante',
    type: 'select',
    required: true
  },
  email: {
    type: "text",
    name: "email",
    label: "Correo electrónico",
    readonly: true
  },
  divider: {
      type: 'divider'
  },
  password: {
    type: 'password',
    label: 'Contraseña',
    required: false
  },
}