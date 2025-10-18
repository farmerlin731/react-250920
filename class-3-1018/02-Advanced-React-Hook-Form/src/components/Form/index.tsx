import { useForm } from "react-hook-form";
import Field from "./field";
import { useEffect } from "react";

function BasicForm({ onSubmit, formFields, resetDate }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    reset(resetDate);
  }, [reset, resetDate]);

  return (
    /* "handleSubmit" 會在 onSubmit 之前確認是否有錯誤訊息" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {formFields.map((field) => (
        <section key={field.name}>
          <label htmlFor="">{field.label}</label>
          <Field field={field} register={register} />
          {errors[field.name] && `${field.label}為必填欄位`}
        </section>
      ))}

      <input type="submit" />
    </form>
  );
}
export default BasicForm;
