"use client";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((count, item) => count + Number(item.quantity), 0);

  return (
    <>
      <div className="box-top-logo">
        <Link href="/">
          <img src="/asset/image/logo-new.png" alt="" />
        </Link>

        <form action="/Search" method="get">
          <input className="search" type="text" name="keyword" placeholder="Vui lòng nhập tên sản phẩm..." />
        </form>
        <div className="user">
          <i className="fa-solid fa-user"></i>
        </div>

        <Link href="../login/dangnhap" style={{ textDecoration: "none" }}>
          <label className="button-top">Login</label>
        </Link>

        <Link href="../cart" style={{ textDecoration: "none" }}>
          <label className="button-top">
            <i className="fa fa-cart-shopping">{cartCount} </i> Giỏ hàng
          </label>
        </Link>
      </div>
      <div className="box-menu">
        <span className="button-menu">
          <Link href="#">
            <i className="fa-solid fa-bars"></i>&nbsp; Tất cả danh mục |
          </Link>
          <ul className="menu-list">
            <li>Điện thoại</li>
            <li>Laptop</li>
            <li>Đồng hồ</li>
            <li>Âm thanh</li>
            <li>Phụ kiện</li>
            <li>Tivi</li>
            <li>PC , Màn hình</li>
            <li>Hàng cũ</li>
            <li>Thu cũ đổi mới</li>
            <li>Tin công nghệ</li>
          </ul>
        </span>
        <Link href="/">Trang chủ</Link>
        <Link href="../product">Sản Phẩm</Link>
        <Link href="../gioithieu">Giới thiệu</Link>
        <Link href="../contact">Liên hệ</Link>
      </div>
    </>
  );
}
