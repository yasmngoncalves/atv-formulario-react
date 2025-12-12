/* eslint-disable react/prop-types */
export default function TextAreaReview({ value, onChange }) {
  return (
    <div className="field">
      <label>Review</label>
      <textarea value={value} onChange={onChange} />
    </div>
  );
}
