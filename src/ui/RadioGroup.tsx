import * as style from "./RadioGroup.css";

type RadioProps = {
  checked: boolean;
  onCheck: () => void;
  label: string;
};

const Radio = ({ checked, onCheck, label }: RadioProps) => (
  <label className={checked ? style.button.checked : style.button.default}>
    <input
      className={style.input}
      type="radio"
      checked={checked}
      onChange={(event) => (event.target.checked ? onCheck() : null)}
    />
    {label}
  </label>
);

type RadioGroupProps = {
  label: string;
  options: Array<{
    checked: boolean;
    onCheck: () => void;
    label: string;
  }>;
};

const RadioGroup = ({ label, options }: RadioGroupProps) => (
  <div role="group" className={style.group}>
    <legend className={style.label}>{label}</legend>

    <div className={style.options}>
      {options.map((option, index) => (
        <Radio key={index} {...option} />
      ))}
    </div>
  </div>
);

export default RadioGroup;
