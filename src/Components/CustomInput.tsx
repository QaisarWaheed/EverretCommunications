type InputProps = {
  label: string;
  type: string;
  smallText?: string;
};

const CustomInput = (props: InputProps) => {
  return (
    <div className="flex flex-col mt-2">
      <label className="text-sm">{props.label}</label>
      <small className="text-gray-500">{props.smallText}</small>
      <input
        className="p-1"
        type={props.type}
        style={{
          border: "1px solid ",
          borderRadius: "6px",
        }}
      ></input>
    </div>
  );
};

export default CustomInput;
