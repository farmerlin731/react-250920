import React from "react";
import { useForm } from "react-hook-form";

const formFields = [
  {
    name: "firstName",
    label: "姓氏",
    type: "text",
    rules: { required: true, maxLength: 80 },
  },
  {
    name: "lastName",
    label: "名稱",
    type: "text",
    rules: { required: true, maxLength: 80 },
  },
  {
    name: "title",
    label: "尊稱",
    type: "select",
    options: [
      {
        label: "Mr",
        value: "Mr",
      },
      {
        label: "Mrs",
        value: "Mrs",
      },
      {
        label: "Miss",
        value: "Miss",
      },
      {
        label: "Dr",
        value: "Dr",
      },
    ],
    rules: { required: true, maxLength: 80 },
  },
];

function LoopFormNew() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    /* "handleSubmit" 會在 onSubmit 之前確認是否有錯誤訊息" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {formFields.map((field) => (
        <section key={field.name}>
          <label htmlFor="">{field.label}</label>
          {field.type === "select" ? (
            <select {...register(field.name, { required: true })}>
              {field.options?.map((option) => (
                <option key={option.value}>{option.label}</option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              placeholder={`請輸入${field.label}`}
              {...register(field.name, field.rules)}
            />
          )}
          {errors[field.name] && `${field.label}為必填欄位`}
        </section>
      ))}

      <input type="submit" />
    </form>
  );
}
export default LoopFormNew;
