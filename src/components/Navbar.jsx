function Navbar() {
  const navItems = ['Trang chủ', 'Tính năng', 'Quy trình', 'Thống kê', 'Liên hệ'];
  const sectionIds = ['hero', 'features', 'process', 'dashboard', 'footer'];

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#hero" className="navbar__brand">
          <span className="navbar__brand-mark">TP</span>
          <div>
            <strong>TimeSheet Pro</strong>
            <span>Smart Time Tracking</span>
          </div>
        </a>

        <nav className="navbar__menu">
          {navItems.map((item, index) => (
            <a key={item} href={`#${sectionIds[index]}`} className="navbar__link">
              {item}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button type="button" className="button button--ghost">
            Đăng nhập
          </button>
          <button type="button" className="button button--primary">
            Bắt đầu
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
