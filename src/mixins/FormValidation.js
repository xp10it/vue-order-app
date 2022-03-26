import { required } from "vuelidate/lib/validators";

export const FormValidation = {
  validations: {
    invoiceForm: {
      address: {
        required,
      },
      city: {
        required,
      },
      postCode: {
        required,
      },
      country: {
        required,
      },
      clientName: {
        required,
      },
      clientEmail: {
        required,
      },
      clientAddress: {
        required,
      },
      clientCity: {
        required,
      },
      clientPostCode: {
        required,
      },
      clientCountry: {
        required,
      },
      projectDesc: {
        required,
      },
      projects: {
        required,
      },
    },
  },
};
