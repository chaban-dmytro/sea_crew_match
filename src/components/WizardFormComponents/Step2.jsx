import { ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { RangeWizard } from "../../pages/WizardForm/RangeWizard/RangeWizard";

export const Step2 = () => {
  return (
    <div
      onSubmit={() => console.log("Step2 onSubmit")}
      validationSchema={Yup.object({
        skils: Yup.string("Chose some skills"),
        // .required("required"),
        experienceMin: Yup.number("Need be a number").positive().integer(),
        experienceMax: Yup.number("Need be a number").positive().integer(),
      })}
    >
      <div>
        <label htmlFor="skils">Skils needed</label>
        <Field name="skils" as="select">
          <option>Skils</option>
          <option value="fishing">Fishing</option>
          <option value="transportation">Transportation</option>
          <option value="seafood_processing">Seafood Processing</option>
        </Field>
        <ErrorMessage className="error" component="div" name="category" />
      </div>
      <RangeWizard
        info={{
          min: 0,
          max: 100,
          valueMin: 35,
          valueMax: 60,
          units: "years",
        }}
      />
    </div>
  );
};
