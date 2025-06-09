type CustomTextProps = {
  label: string;
  smallText?: string;
  name: string;
};

const CustomTextArea = (props: CustomTextProps) => {
  return (
    <div className="flex flex-col mt-3">
      <label className="text-sm">{props.label}</label>
      <small className="text-gray-500 text-sm">{props.smallText}</small>
      <textarea
        name={props.name}
        style={{
          border: "1px solid ",
          borderRadius: "6px",
        }}
      ></textarea>
    </div>
  );
};

export default CustomTextArea;
