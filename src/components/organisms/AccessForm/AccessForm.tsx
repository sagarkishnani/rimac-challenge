import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../../molecule/Input/Input";
import { documentTypes, validationMessages } from "../../../contants";
import useUserStore from "../../../stores/UserStore/UserStore";
import PrimaryButton from "../../molecule/PrimaryButton/PrimaryButton";
import SelectInput from "../../molecule/SelectInput/SelectInput";
import LabelLink from "../../atoms/LabelLink/LabelLink";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import "./AccessForm.scss";

interface AccessFormProps {
  onSubmit: (values: FormValues) => void;
}

interface FormValues {
  documentType: string;
  documentNumber: string;
  phone: string;
  commercial: boolean;
  privacy: boolean;
}

const AccessForm: React.FC<AccessFormProps> = ({ onSubmit }) => {
  const isLoading = useUserStore((state) => state.isLoading);

  const initialValues: FormValues = {
    documentType: "DNI",
    documentNumber: "",
    phone: "",
    commercial: false,
    privacy: false,
  };

  const validationSchema = Yup.object({
    documentNumber: Yup.string().when("documentType", {
      is: "DNI",
      then: (schema) =>
        schema
          .matches(/^\d+$/, validationMessages.onlyNumber)
          .min(8, validationMessages.dniCharacters)
          .max(8, validationMessages.dniCharacters)
          .required(validationMessages.dniRequired),
      otherwise: (schema) =>
        schema
          .min(6, validationMessages.ceMinCharacters)
          .max(20, validationMessages.ceMaxCharacters)
          .required(validationMessages.ceRequired),
    }),
    phone: Yup.string()
      .matches(/^\d+$/, validationMessages.onlyNumber)
      .min(9, validationMessages.phoneFormat)
      .required(validationMessages.phoneRequired),
    commercial: Yup.boolean().isTrue(validationMessages.commercialAccept),
    privacy: Yup.boolean().isTrue(validationMessages.privacyAccept),
  });

  const handleSubmit = (values: FormValues) => {
    if (validationSchema.isValidSync(values)) {
      onSubmit(values);
    } else {
      return;
    }
  };

  return (
    <div className="access-form">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnChange
      >
        <Form>
          <SelectInput
            nameSelect="documentType"
            nameInput="documentNumber"
            options={documentTypes}
          />
          <Input label="Celular" name="phone" maxLength={9} />
          <Checkbox label="Acepto la política de privacidad" name="privacy" />
          <Checkbox
            label="Acepto la Política Comunicaciones Comerciales"
            name="commercial"
          />
          <LabelLink link="/" title="Aplican términos y condiciones." />
          <PrimaryButton
            title="Cotiza aquí"
            type="submit"
            isLoading={isLoading}
            onClick={() => handleSubmit(initialValues)}
          />
        </Form>
      </Formik>
    </div>
  );
};

export default AccessForm;
