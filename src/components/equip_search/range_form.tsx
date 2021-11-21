import { useState } from "react";

const RangeForm = ({ id, label, limit, onChange }: { limit: { min: number, max: number } } & FormChild) => {
  const minId = `${id}-min`;
  const maxId = `${id}-max`;

  const [minValue, setMinValue] = useState<number>(limit.min);
  const [maxValue, setMaxValue] = useState<number>(limit.max);

  const [error, setError] = useState<string>("");

  const onMinChange = (event: BlurEvent) => {
    if (event.target.value === "") {
      setMinValue(limit.min);
      setError("");
      onChange(id, { min: limit.min });
      return;
    }

    const value = event.target.valueAsNumber;
    if (Number.isNaN(value)) {
      setError(`${label} の最小値に数値を入力してください。`);
      return;
    }

    if (value > maxValue) {
      setError(`${label} の最小値は最大値以下にしてください。`);
      return;
    }

    if (value < limit.min || limit.max < value) {
      setError(`${label} の最小値は、 ${limit.min} 以上 ${limit.max} 以下にしてください。`);
    } else {
      setMinValue(value);
      setError("");
      onChange(id, { min: value });
    }
  }

  const onMaxChange = (event: BlurEvent) => {
    console.log(event.target.value)
    if (event.target.value === "") {
      setMaxValue(limit.max);
      setError("");
      onChange(id, { max: limit.max });
      return;
    }

    const value = event.target.valueAsNumber;
    console.log(value)
    if (Number.isNaN(value)) {
      setError(`${label} の最大値に数値を入力してください。`);
      return;
    }

    if (value < minValue) {
      setError(`${label} の最大値は最小値以上にしてください。`);
      return;
    }

    if (value < limit.min || limit.max < value) {
      setError(`${label} の最大値は、 ${limit.min} 以上 ${limit.max} 以下にしてください。`);
    } else {
      setMaxValue(value);
      setError("");
      onChange(id, { max: value });
    }
  }

  return (
    <p>
      <label htmlFor={minId}>
        {label}
      </label>
      <input type="number" id={minId} onBlur={onMinChange} min={limit.min} max={limit.max} />
      <label htmlFor={maxId}>
        から
      </label>
      <input type="number" id={maxId} onBlur={onMaxChange} min={limit.min} max={limit.max} />
      <span>
        まで
      </span>
      {error && <span> {error} </span>}
    </p>
  )
}

export { RangeForm };