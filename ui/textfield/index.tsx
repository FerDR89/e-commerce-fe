import styled from "styled-components";

type InputCustomProps = {
  inputBorderColor: string;
};

const Input = styled.input`
  min-width: 248px;
  width: ${(props) => props.width + "px"};
  height: ${(props) => props.height + "px"};
  border-radius: var(--border-radius);
  border: 1px solid ${(props: InputCustomProps) => props.inputBorderColor};
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
`;

type FieldSetCustomProps = {
  fieldSetWidth: number;
};

const FieldSet = styled.fieldset`
  width: ${(props: FieldSetCustomProps) => props.fieldSetWidth + "px"};
  min-width: 248px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: none;
  margin: 0;
  padding: 0;
`;

type TextFieldProps = {
  labelText?: string;
  type: string;
  name: string;
  placeholder: string;
  width: number;
  heightInput: number;
  borderColor: string;
};

export const TextField = ({
  labelText,
  type,
  name,
  placeholder,
  width,
  heightInput,
  borderColor,
}: TextFieldProps) => {
  return (
    <FieldSet fieldSetWidth={width}>
      {labelText && <Label htmlFor={name}>{labelText}</Label>}
      <Input
        name={name}
        type={type}
        id={name}
        placeholder={placeholder}
        width={width}
        height={heightInput}
        inputBorderColor={borderColor}
      />
    </FieldSet>
  );
};
