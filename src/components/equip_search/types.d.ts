type BlurEvent = React.FocusEvent<HTMLInputElement>;

type FormChild = {
  id: string,
  label: string,
  onChange: (id: string, value: InputValue) => void
}

type InputValue = Partial<{
  min: number,
  max: number,
  bool: boolean
}>