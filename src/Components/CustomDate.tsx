type DateProps = {
  label: string;
  smallText?: string;
  name: string;
};

const CustomDate = (props: DateProps) => {
  return (
    <div className="flex flex-col gap-1 mt-2">
      <label htmlFor="">{props.label}</label>
      <small className="text-gray-500">{props.smallText}</small>
      <input
        name={props.name}
        type="date"
        className="w-36 p-1"
        style={{
          border: "1px solid ",
          borderRadius: "6px",
        }}
      ></input>
    </div>
  );
};

export default CustomDate;
