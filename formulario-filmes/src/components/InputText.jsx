/* eslint-disable react/prop-types */
export default function InputText({ label, value, onChange }) {
  return (
    <div className="field">
      <label>{label}</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
}
