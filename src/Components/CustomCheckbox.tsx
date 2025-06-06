type checkBoxData = {
  label: string;
};

const CustomCheckbox = (props: checkBoxData) => {
  return (
    <div className="flex gap-1">
      <input type="checkbox"></input>
      <label htmlFor="">{props.label}</label>
    </div>
  );
};

export default CustomCheckbox;
