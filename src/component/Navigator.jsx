export default function Navigator() {
  return (
    <div className="navigator-container">
      <div className="navigator-tag">책 관리.</div>
      <button className="navigator-button">책 목록</button>
      <button className="navigator-button">대출 목록</button>
      <div className="navigator-tag">사용자 관리.</div>
      <button className="navigator-button">사용자 목록</button>
      <div className="navigator-tag">게시판 관리.</div>
      <button className="navigator-button">공지사항</button>
    </div>
  );
}
