export default function Header() {
  return (
    <header className="header">
      <div className="header-search-container">
        <img src="ci-logo-1.png" width={95} height={36} />
        <input className="header-search" placeholder="검색어를 입력해주세요" />
      </div>
    </header>
  );
}
