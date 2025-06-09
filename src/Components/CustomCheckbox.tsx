type checkBoxData = {
  label: string;
  name: string;
};

const CustomCheckbox = (props: checkBoxData) => {
  return (
    <div className="flex gap-1">
      <input type="checkbox" name={props.name}></input>
      <label htmlFor="">{props.label}</label>
    </div>
  );
};

export default CustomCheckbox;
