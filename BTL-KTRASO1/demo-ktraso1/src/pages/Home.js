import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section id="home" class="hero">
        <h2>Khám phá thế giới cùng chúng tôi</h2>
        <p>
          Trải nghiệm những địa danh tuyệt đẹp và tận hưởng những chuyến đi khó
          quên.
        </p>

        <Link to="./Destination" className="btn">
          Khám phá ngay
        </Link>
      </section>

      <section id="destinations" class="destinations">
        <h2>Điểm Đến Hấp Dẫn</h2>
        <div class="destination-list">
          <div class="destination destination1">
            <h3>Bãi biển không rác</h3>
          </div>
          <div class="destination destination2">
            <h3>Khám phá đại học Thủy Lợi</h3>
          </div>
          <div class="destination destination3">
            <h3>Chinh phục đỉnh núi</h3>
          </div>
        </div>
      </section>

      <footer>
        <p>
          &copy; 2025 Du Lịch Khám Phá Dến Những Vùng Đất Mới Là. Hãy Đến Những
          Vùng Đất Mới Cùng Với Chúng Tôi
        </p>
      </footer>
    </>
  );
}
export default Home;
