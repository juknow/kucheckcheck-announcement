import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useStore from "../store";

export default function AnnounceDetail() {
  const { id } = useParams();
  const announcements = useStore((state) => state.announcements);
  const announcement = announcements[parseInt(id)];

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
      <div className="announceregister-container">
        <button className="announceregister-button">수정</button>
      </div>
    </div>
  );
}
