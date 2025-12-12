/* eslint-disable react/prop-types */
export default function RadioNota({ value, onChange }) {
  return (
    <div className="field">
      <label>Nota</label>

      {[1,2,3,4,5].map((n) => (
        <label key={n} className="radio-item">
          <input
            type="radio"
            name="nota"
            value={n}
            checked={value === n}
            onChange={() => onChange(n)}
          />
          {n}
        </label>
      ))}
    </div>
  );
}
