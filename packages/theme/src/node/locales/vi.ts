import type { ThemeLocaleData } from "../../shared/index.js";

export const viLocale: ThemeLocaleData = {
  lang: "vi-VN",

  navbarLocales: {
    langName: "Ngôn ngữ",
    selectLangAriaLabel: "Chọn ngôn ngữ",
  },

  metaLocales: {
    author: "Người viết",
    date: "Ngày viết",
    origin: "Nguồn",
    views: "Views của trang",
    category: "Category",
    tag: "Tag",
    readingTime: "Thời gian đọc",
    words: "Words",
    toc: "On This Page",
    prev: "Prev",
    next: "Next",
    contributors: "Người đóng góp",
    editLink: "Chỉnh sửa trang này",
    print: "In",
  },

  blogLocales: {
    article: "Bài viết",
    articleList: "Danh sách Bài viết",
    category: "Category",
    tag: "Tag",
    timeline: "Timeline",
    timelineTitle: "Yesterday Once More!",
    all: "Tất cả",
    intro: "Giới thiệu cá nhân",
    star: "Ngôi sao",
    empty: "$text trống",
  },

  paginationLocales: {
    prev: "Bài kế",
    next: "Bài trước",
    navigate: "Đi đến",
    action: "Đi",
    errorText: "Xin hãy nhập 1 số từ 1 đến $page !",
  },

  outlookLocales: {
    themeColor: "Màu nền",
    darkmode: "Theme Mode",
    fullscreen: "Full Screen",
  },

  encryptLocales: {
    iconLabel: "Page Encrypted",
    placeholder: "Enter password",
    remember: "Remember password",
    errorHint: "Vui lòng nhập đúng mật khẩu",
  },

  routerLocales: {
    skipToContent: "Bỏ qua nội dung chính",
    notFoundTitle: "Trang không tìm thấy",
    notFoundMsg: [
      "Ở đây chẳng có gì cả.",
      "Sao chúng ta lại đến đây?",
      "Đây là lỗi bốn-không-bốn",
      "Có vẻ chúng ta có vài broken link.",
    ],
    back: "Quay lại",
    home: "Trang chủ",
  },
};
