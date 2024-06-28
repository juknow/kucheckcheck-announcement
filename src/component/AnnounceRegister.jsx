import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useStore from "../store";

export default function AnnounceRegister() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const announcements = useStore((state) => state.announcements);
  const addAnnouncement = useStore((state) => state.addAnnouncement);
  const updateAnnouncement = useStore((state) => state.updateAnnouncement);
  const navigate = useNavigate();

  const handleAdd = () => {
    addAnnouncement({ title, content, date });
    alert("등록이 완료되었습니다.");
    navigate("/announce");
  };

  useEffect(() => {
    if (id !== undefined) {
      const announcement = announcements[parseInt(id)];
      if (announcement) {
        setTitle(announcement.title);
        setContent(announcement.content);
        setDate(announcement.date);
      }
    }
  }, [id, announcements]);

  const handleAddOrUpdate = () => {
    if (id === undefined) {
      addAnnouncement({ title, content, date });
      alert("등록이 완료되었습니다.");
    } else {
      updateAnnouncement(parseInt(id), { title, content, date });
      alert("수정이 완료되었습니다.");
    }
    navigate("/announce");
  };

  return (
    <div className="announceregister">
      <div style={{ marginBottom: "32px" }} className="announce-header">
        <div className="announceregister-header-name">
          공지사항 {id !== undefined ? "수정" : "등록"}
          <span class="red-dot">.</span>
        </div>
      </div>
      <div className="announceregister-name">
        제목<span class="red-dot">.</span>
      </div>
      <input
        className="announceregister-name-input"
        placeholder="제목을 입력해주세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="announceregister-name">
        내용<span class="red-dot">.</span>
      </div>
      <textarea
        className="announceregister-content-input"
        placeholder="내용을 입력해주세요"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className="announceregister-container">
        <button className="announceregister-button" onClick={handleAddOrUpdate}>
          {id !== undefined ? "수정" : "등록"}
        </button>
      </div>
    </div>
  );
}
