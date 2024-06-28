import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useStore from "../store";

export default function AnnounceDetail() {
  const { id } = useParams();
  const announcements = useStore((state) => state.announcements);
  const announcement = announcements[parseInt(id)];
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/register/${id}`);
  };

  if (!announcement) {
    return <div>Announcement not found.</div>;
  }

  return (
    <div className="announceregister">
      <div style={{ marginBottom: "32px" }} className="announce-header">
        <div className="announceregister-header-name">
          공지사항<span class="red-dot">.</span>
        </div>
        <button className="announceregister-button">삭제</button>
      </div>
      <div className="announceregister-name">
        제목<span class="red-dot">.</span>
      </div>
      <div className="announceregister-name">{announcement.title}</div>
      <div className="announceregister-name">
        내용<span class="red-dot">.</span>
      </div>
      <div className="announceregister-name">{announcement.content}</div>
      <button className="announceregister-button" onClick={handleEditClick}>
        수정
      </button>
    </div>
  );
}
