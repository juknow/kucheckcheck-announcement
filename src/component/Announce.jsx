import AnnounceComponent from "./AnnounceComponent";
import AnnounceIndex from "./AnnounceIndex";

export default function Announce() {
  return (
    <div className="announce">
      <div className="announce-header">
        <div className="announce-header-name">공지사항.</div>
        <button className="announce-register-button">새 글 등록</button>
      </div>
      <input placeholder="검색어를 입력하세요" className="announce-search" />
      <div className="announce-container">
        <div className="announce-container-header">
          <div>제목</div>
          <div>날짜</div>
        </div>
        <AnnounceComponent />
        <AnnounceComponent />
      </div>
      <AnnounceIndex />
    </div>
  );
}
