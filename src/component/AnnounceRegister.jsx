export default function AnnounceRegister() {
  return (
    <div className="announceregister">
      <div style={{ marginBottom: "32px" }} className="announce-header">
        <div className="announceregister-header-name">공지사항 등록.</div>
      </div>
      <div className="announceregister-name">제목.</div>
      <input className="announceregister-name-input" placeholder="책 제목" />
      <div className="announceregister-name">내용.</div>
      <textarea className="announceregister-content-input" placeholder="내용" />
      <div className="announceregister-container">
        <button className="announceregister-button">등록</button>
      </div>
    </div>
  );
}
