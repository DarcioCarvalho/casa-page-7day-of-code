import { DetailedHTMLProps, Dispatch, forwardRef, ForwardRefRenderFunction, InputHTMLAttributes, SetStateAction } from "react";
import { ValuesRange } from "..";
import { formatDecimal, formatDecimalFractionDigits } from "../../../utils/format";
import { getValidFloatValue } from "../../../utils/stringUtils";

import './inputValueRange.module.css';

interface InputValueRangeProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  valuesRange: ValuesRange;
  setValuesRange: Dispatch<SetStateAction<ValuesRange>>;
  fieldNameValuesRange: "minimal" | "maximum";
  placeholder: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputValueRangeProps>
  = ({ valuesRange, setValuesRange, fieldNameValuesRange, placeholder, ...rest }, ref) => {
    function setFieldBasicValuesRange(field: "minimal" | "maximum", value: string) {
      setValuesRange(prevState => (
        {
          ...prevState,
          [field]: value
        }
      ));
    }

    return (
      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        /* pattern = "^[0-9]+([,.][0-9]+)?$" */
        value={valuesRange[fieldNameValuesRange]}
        onChange={(e) => {
          const validValue = getValidFloatValue(e.target.value);
          setFieldBasicValuesRange(fieldNameValuesRange, validValue);
        }}
        onBlur={(e) => {
          if (!e.target.value.length)
            return
          e.target.value = formatDecimalFractionDigits(Number(e.target.value.replace(",", ".")), 2);
          setFieldBasicValuesRange(fieldNameValuesRange, e.target.value);
        }}
        {...rest}
      />
    );
  }

export const InputValueRange = forwardRef(InputBase);