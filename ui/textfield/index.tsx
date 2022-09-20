import {
  ControllerRenderProps,
  FieldValues,
  useController,
} from "react-hook-form";
import styled from "styled-components";

type InputCustomProps = {
  inputBorderColor: string;
};

const Input = styled.input`
  min-width: 248px;
  border-radius: var(--border-radius);
  padding-left: 10px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 3px solid ${(props: InputCustomProps) => props.inputBorderColor};
`;

const Label = styled.label`
  font-size: 12px;
  margin-bottom: 8px;
`;

type FieldSetCustomProps = {
  fieldSetWidth: string;
};

const FieldSet = styled.fieldset`
  width: ${(props: FieldSetCustomProps) => props.fieldSetWidth};
  min-width: 248px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: none;
  margin: 0;
  padding: 0;
`;

//TODO Resolver el type de las props
type TextFieldProps = {
  labelText?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  width: string;
  heightInput?: string;
  borderColor: string;
  field: ControllerRenderProps<FieldValues, string>;
};

export const TextField = (props: any) => {
  const { field } = useController(props);
  return (
    <FieldSet fieldSetWidth={props.width}>
      {props.labelText && <Label htmlFor={props.name}>{props.labelText}</Label>}
      <Input
        width={props.width}
        height={props.heightInput}
        inputBorderColor={props.borderColor}
        placeholder={props.placeholder}
        type={props.type}
        {...field}
      />
    </FieldSet>
  );
};
