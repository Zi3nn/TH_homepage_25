import {
  HiOutlineSparkles,
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
  HiOutlineArrowsPointingOut,
} from 'react-icons/hi2';

const benefits = [
  {
    title: 'Tiết kiệm thời gian quản lý',
    description: 'Tự động hóa quy trình theo dõi công, giảm thao tác tổng hợp thủ công mỗi ngày.',
    icon: HiOutlineSparkles,
  },
  {
    title: 'Giảm sai sót bảng công',
    description: 'Dữ liệu tập trung, hiển thị rõ ràng, dễ rà soát và hạn chế thất thoát thông tin.',
    icon: HiOutlineShieldCheck,
  },
  {
    title: 'Tăng hiệu quả theo dõi nhân sự',
    description: 'Quản lý trạng thái làm việc, hiệu suất và đơn từ trên cùng một giao diện.',
    icon: HiOutlineUserGroup,
  },
  {
    title: 'Dễ mở rộng cho doanh nghiệp',
    description: 'Phù hợp cho nhiều quy mô công ty, dễ phát triển thêm module về sau.',
    icon: HiOutlineArrowsPointingOut,
  },
];

function Benefits() {
  return (
    <section className="section section--soft">
      <div className="container benefits-layout">
        <div className="benefits-copy reveal">
          <span className="section-badge">Lợi ích nổi bật</span>
          <h2>Nâng cao trải nghiệm quản trị nhân sự với giao diện rõ ràng, dễ dùng</h2>
          <p>
            Không chỉ đẹp về mặt trình bày, thiết kế còn mô phỏng đúng tinh thần của một hệ
            thống doanh nghiệp: nhanh, gọn, chuyên nghiệp và đáng tin cậy.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map(({ title, description, icon: Icon }, index) => (
            <article
              className="benefit-card reveal"
              key={title}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="benefit-card__icon">
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
