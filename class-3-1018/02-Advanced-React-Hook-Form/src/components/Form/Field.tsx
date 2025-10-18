const Field = ({ field, register }) => {
  switch (field.type) {
    case "select":
      return (
        <select {...register(field.name, { required: true })}>
          {field.options.map((option) => (
            <option key={option.value}>{option.label}</option>
          ))}
        </select>
      );

    case "radio":
      return (
        <>
          {field.options.map((option) => (
            <label>
              <input
                {...register(field.name, { required: true })}
                type="radio"
                value={option.value}
              />
              {option.value}
            </label>
          ))}
        </>
      );

    default:
      return (
        <input
          type={field.type}
          placeholder={`請輸入${field.label}`}
          {...register(field.name, field.rules)}
        />
      );
  }
};

export default Field;
