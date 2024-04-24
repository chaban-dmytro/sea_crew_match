import { ErrorMessage, Field } from "formik";
import * as Yup from "yup";

export const Step1 = () => {
  return (
    <div
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
    </div>
  );
};
