const BooleanForm = ({ id, label, onChange }: FormChild) => {
  const handler = (event: BlurEvent) => {
    onChange(id, {
      bool: event.target.checked
    });
  }
  return (
    <p>
      <label htmlFor={id}>
        { label }
      </label>
      <input id={id} type="checkbox" onChange={handler}/>
    </p>
  )
}

export { BooleanForm };