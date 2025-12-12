/* eslint-disable react/prop-types */
export default function InputNumber({ label, value, onChange }) {
  return (
    <div className="field">
      <label>{label}</label>
      <input type="number" value={value} onChange={onChange} />
    </div>
  );
}
