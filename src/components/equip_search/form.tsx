import React, { useState } from "react";
import { ResponseData } from "../../pages/api/search";
import { equipSchema } from "../../util/schema";
import { BooleanForm } from "./boolean_form";

import { RangeForm } from "./range_form";

const Form = ({ onSolved }: { onSolved: (response: ResponseData) => void }) => {
  const inputs: JSX.Element[] = [];

  const onChange = (id: string, value: InputValue) => {
    console.log(id, value);
    const copy = new Map(values);
    const pastValue = copy.get(id);

    copy.set(id, { ...pastValue, ...value });
    setValues(copy);
  }

  const buf = new Map<string, InputValue>();

  equipSchema.forEach((schema, key) => {
    if (schema.type === "range" && schema.min !== undefined && schema.max !== undefined) {
      inputs.push(
        <RangeForm limit={{ min: schema.min, max: schema.max }} id={key} label={schema.label} onChange={onChange} key={key} />
      );

      buf.set(key, {
        min: schema.min,
        max: schema.max
      });
      return;
    }

    if (schema.type === "boolean") {
      inputs.push(
        <BooleanForm id={key} label={schema.label} key={key} onChange={onChange} />
      );

      buf.set(key, {
        bool: false
      });
    }
  });

  const [values, setValues] = useState<Map<string, InputValue>>(new Map<string, InputValue>(buf));
  const onSubmit: React.FormEventHandler = (event) => {
    event.preventDefault();

    const req: any = {};

    values.forEach((value, key) => {
      const schema = equipSchema.get(key);
      if (schema === undefined) return;

      const label = schema.label;
      if (schema.type === "boolean" && !value.bool) return;  // 検索に不要
      if (schema.type === "number" && (value.min === undefined || value.max === undefined)) return; // 値が不正
      if (label === undefined) return;

      req[label] = value;
    });

    console.log(JSON.stringify(req));

    const get = async () => {
      
      const response = await fetch(process.env.NODE_ENV === "development" ? "http://localhost:3000/api/search": "https://denpa-tools.vercel.app/api/search", {
        method: "POST",
        body: JSON.stringify(req),
      });
      const data = await response.json();
      return data;
    }

    get().then(data => {
      console.log(data);
      onSolved(data);
    });
  }

  return (
    <form onSubmit={onSubmit}>
      { inputs }
      <input type="submit" />
    </form>
  );
}

export { Form }