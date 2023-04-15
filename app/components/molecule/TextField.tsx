interface ITextFieldProps {
  placeholder: string;
  id: string;
  label?: string;
  register?: any;
  type?: "text" | "password" | "email" | "number";
  inputStyle?: string;
}

const TextField = ({
  placeholder,
  id,
  register = {},
  label,
  type = "text",
  inputStyle = "bg-base-200",
}: ITextFieldProps) => {
  return (
    <div className="form-control">
      {label && label !== "" && (
        <label className="label" htmlFor={id}>
          <span className="label-text">{label}</span>
        </label>
      )}
      <input
        id={id}
        className={`input ${inputStyle}`}
        type={type}
        {...register}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;
