export default function AnnounceComponent({ title, date }) {
  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
  }
  return (
    <div className="announcecomponent-container">
      <div style={{ fontWeight: 600 }}>{title}</div>
      <div>{formatDate(date)}</div>
    </div>
  );
}
