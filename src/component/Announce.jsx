export default function Announce() {
  return (
    <div className="announce">
      <div className="announce-header">
        <div className="announce-header-name">공지사항.</div>
        <button className="announce-register-button">새 글 등록</button>
      </div>
      <input className="announce-search" />
      <div className="announce-container"></div>
      <div className="announce-index"></div>
    </div>
  );
}
