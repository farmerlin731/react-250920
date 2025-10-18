import React from "react";
import { useForm } from "react-hook-form";

function BasicForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    /* "handleSubmit" 會在 onSubmit 之前確認是否有錯誤訊息" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* 透過 "register" 加上對應名稱，將欄位註冊到 useForm 當中 */}
      <input {...register("firstName")} placeholder="First Name" />
      <input {...register("lastName")} placeholder="Last Name" />
      <button type="submit">Submit</button>
    </form>
  );
}
export default BasicForm;
