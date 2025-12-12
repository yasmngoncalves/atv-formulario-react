/* eslint-disable react/prop-types */
export default function FormContainer({ children, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="form-container">
      {children}
    </form>
  );
}
