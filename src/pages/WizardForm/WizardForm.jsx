import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
// import * as Yup from "yup";
import { Step1 } from "../../components/WizardFormComponents/Step1";
import { Step2 } from "../../components/WizardFormComponents/Step2";
import { FinishStep } from "../../components/WizardFormComponents/FinishStep";
import { ProgressBar } from "../../components/WizardFormComponents/ProgressBar/ProgressBar";
// import { Range } from "../../components/Filter/Range/Range";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Wizard = ({ children, initialValues, onSubmit }) => {
  const [stepNumber, setStepNumber] = useState(0);
  const steps = React.Children.toArray(children);
  const [snapshot, setSnapshot] = useState(initialValues);

  const step = steps[stepNumber];
  const totalSteps = steps.length;
  const isLastStep = stepNumber === totalSteps - 1;

  const next = (values) => {
    setSnapshot(values);
    setStepNumber(Math.min(stepNumber + 1, totalSteps));
  };

  const previous = (values) => {
    setSnapshot(values);
    setStepNumber(Math.max(stepNumber - 1, 0));
  };

  const handleSubmit = async (values, bag) => {
    if (step.props.onSubmit) {
      await step.props.onSubmit(values, bag);
    }
    if (isLastStep) {
      return onSubmit(values, bag);
    } else {
      bag.setTouched({});
      next(values);
    }
  };

  return (
    <Formik
      initialValues={snapshot}
      onSubmit={handleSubmit}
      validationSchema={step.props.validationSchema}
    >
      {(formik) => (
        <Form autoComplete="off">
          <ProgressBar currentStep={stepNumber + 1} />
          <p>
            Step {stepNumber + 1} of {totalSteps}
          </p>
          {step}
          <div style={{ display: "flex" }}>
            {stepNumber > 0 && (
              <button onClick={() => previous(formik.values)} type="button">
                Back
              </button>
            )}
            <div>
              <button disabled={formik.isSubmitting} type="submit">
                {isLastStep ? "Public project" : "Continue"}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

// const WizardStep = ({ children }) => children;

export const WizardForm = () => (
  <div className="container">
    <h1>Formik Multistep Wizard</h1>
    <Wizard
      initialValues={{
        title: "",
        category: "",
        description: "",
        skils: "",
        experienceMax: "",
        experienceMin: "",
      }}
      onSubmit={async (values) =>
        sleep(300).then(() => console.log("Wizard submit", values))
      }
    >
      <Step1 />
      {/* <WizardStep
        onSubmit={() => console.log("Step1 onSubmit")}
        validationSchema={Yup.object({
          // title: Yup.string().required("required"),
          // category: Yup.string().required("required"),
          // description: Yup.string().required("required"),
          title: Yup.string(),
          category: Yup.string(),
          description: Yup.string(),
        })}
      >
        <div>
          <label htmlFor="title">Title</label>
          <Field
            name="title"
            type="text"
            placeholder="Project title"
            component="input"
          />
          <ErrorMessage className="error" component="div" name="title" />
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <Field name="category" as="select">
            <option>Project category</option>
            <option value="fishing">Fishing</option>
            <option value="transportation">Transportation</option>
            <option value="seafood_processing">Seafood Processing</option>
          </Field>
          <ErrorMessage className="error" component="div" name="category" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <Field name="description" as="textarea" />
          <ErrorMessage className="error" component="div" name="description" />
        </div>
      </WizardStep> */}
      <Step2 />
      {/* <WizardStep
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
      </WizardStep>*/}
      <FinishStep />
    </Wizard>
  </div>
);

// export const WizardForm = () => {
//   const initialValues = {
//     name: "",
//     surname: "",
//     age: "",
//   };

//   return (
//     <>
//       <div className="container">
//         <div>Progress bar</div>
//         <FormikSteper initialValues={initialValues}>
//           <div>
//             <label htmlFor="name">
//               Name
//               <Field name="name" type="text"></Field>
//             </label>
//           </div>
//           <div>
//             <label htmlFor="surname">
//               Surname
//               <Field name="surname"></Field>
//             </label>
//           </div>
//           <div>
//             <label htmlFor="age">
//               Age
//               <Field name="age"></Field>
//             </label>
//           </div>
//         </FormikSteper>
//       </div>
//     </>
//   );
// };

// export function FormikSteper({ children, ...props }) {
//   const childrenArray = React.Children.toArray(children);
//   const [step, setStep] = useState(0);
//   const currentChild = childrenArray[step];

//   function isLastStep() {
//     return step === childrenArray.length - 1;
//   }
//   return (
//     <Formik
//       {...props}
//       onSubmit={async (values, helpers) => {
//         if (isLastStep) {
//           await props.onSubmit(values, helpers);
//         } else {
//           setStep((s) => s + 1);
//         }
//       }}
//     >
//       <Form autoComplete="off">
//         {currentChild}
//         {step > 0 ? (
//           <button type="button" onClick={() => setStep((s) => s - 1)}>
//             Back
//           </button>
//         ) : null}
//         <button type="submit" onClick={() => setStep((s) => s + 1)}>
//           {isLastStep() ? "Bublish project" : "Continue"}
//         </button>
//       </Form>
//     </Formik>
//   );
// }
