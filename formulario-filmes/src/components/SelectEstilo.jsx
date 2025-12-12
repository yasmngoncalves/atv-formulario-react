/* eslint-disable react/prop-types */
export default function SelectEstilo({ value, onChange }) {
  return (
    <div className="field">
      <label>Estilo</label>
      <select value={value} onChange={onChange}>
        <option value="">Selecione</option>
        <option value="ação">Ação</option>
        <option value="drama">Drama</option>
        <option value="comédia">Comédia</option>
        <option value="terror">Terror</option>
      </select>
    </div>
  );
}
