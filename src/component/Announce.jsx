import useStore from "../store";
import { Link } from "react-router-dom";
import AnnounceComponent from "./AnnounceComponent";
import AnnounceIndex from "./AnnounceIndex";

export default function Announce() {
  const announcements = useStore((state) => state.announcements);

  return (
    <div className="announce">
      <div className="announce-header">
        <div className="announce-header-name">
          공지사항<span class="red-dot">.</span>
        </div>
        <button className="announce-register-button">
          <Link to="/register" style={{ color: "white", cursor: "pointer" }}>
            새 글 등록
          </Link>
        </button>
      </div>
      <div className="announce-search">
        <input
          className="announce-search-input"
          placeholder="검색어를 입력해주세요"
        />
        <button className="announce-search-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18px"
            height="18px"
            viewBox="0 0 24 24"
          >
            <g fill="none" fillRule="evenodd">
              <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
              <path
                fill="#c3201f"
                d="M10.5 2a8.5 8.5 0 1 0 5.262 15.176l3.652 3.652a1 1 0 0 0 1.414-1.414l-3.652-3.652A8.5 8.5 0 0 0 10.5 2M4 10.5a6.5 6.5 0 1 1 13 0a6.5 6.5 0 0 1-13 0"
              ></path>
            </g>
          </svg>
        </button>
      </div>

      <div className="announce-container">
        <div className="announce-container-header">
          <div>제목</div>
          <div>날짜</div>
        </div>
        {announcements.map((announcement, index) => (
          <AnnounceComponent
            key={index}
            title={announcement.title}
            date={announcement.date}
          />
        ))}
      </div>
      <AnnounceIndex />
    </div>
  );
}
