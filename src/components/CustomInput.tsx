import { IconType } from 'react-icons/lib';
import {
  InputContainer,
  InputIcon,
  Input,
  MaskedInput
} from '../styles/components/CustomInput';

export function CustomInput({
  icon: Icon,
  onChange,
  onBlur,
  value,
  type,
  error,
  name,
  placeholder,
  masked = false,
  mask = null
}) {
  return (
    <InputContainer error={error}>
      <InputIcon>
        <Icon />
      </InputIcon>
      { masked ?
        <MaskedInput
          mask={mask}
          onBlur={onBlur}
          type={type}
          onChange={onChange}
          value={value}
          name={name}
          placeholder={placeholder}
        /> :
        <Input
          onBlur={onBlur}
          type={type}
          onChange={onChange}
          value={value}
          name={name}
          placeholder={placeholder}
        />
      }
    </InputContainer>
  )
}
