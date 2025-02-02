import Link3Icon from "@/components/atoms/Link3Icon";
import moment from "moment";

const vi = {
  lang: [
    { value: "en", label: "Eng" },
    { value: "vi", label: "Vie" },
  ],
  header: {
    open_navigation: "Open Navigation",
    close_navigation: "Close Navigation",
    theme_switcher: "Theme Switcher",
  },
  footer: {
    about_me: "Tìm hiểu về mình",
    links: [],
    social_networks: [
      {
        icon: "SiGmail",
        link: "mailto:inguyenhuyhoang@gmail.com",
      },
      {
        icon: "SiLinkedin",
        link: "https://www.linkedin.com/in/nguyenhuyhoang11/",
      },
      {
        icon: "SiFacebook",
        link: "https://www.facebook.com/NguyenHuyHoangOfficial",
      },
    ],
    develop_by: "Phát triển bởi ",
    build_with: "Xây dựng bằng ",
    with: " bằng ",
  },
  home: {
    intro: {
      header: "Xin chào, Mình là Hoàng Nguyễn",
      description: "Chào mừng mọi người đến với blog của mình!",
      image: "/assets/images/myview.png",
      links: [
        {
          icon: "SiFacebook",
          title: "Visit My Link3",
          link: "https://link3.to/nguyenhuyhoang",
        },
      ],
    },
    featured_posts: "Bài Viết Đặc Sắc",
    read_more: "Xem thêm",
    categories: [
      {
        name: "Web3",
        description: "Các bài viết liên quan về Web3.",
        value: ["web3"],
      },
      {
        name: "Self Development",
        description: "Các bài viết hướng dẫn hoặc mẹo cuộc sống.",
        value: ["tutorial", "tip", "mindset"],
      },
      {
        name: "Marathon",
        description:
          "Các bài viết có nội dung về Marathon và chạy bộ nói chung.",
        value: ["marathon"],
      },
      {
        name: "Khác",
        description: "Các bài viết không thuộc các chủ đề trên.",
        value: ["other"],
      },
    ],
  },
  post: {
    published_at_by: (datetime: any, author: any, locale: string) => {
      moment.locale(locale);
      const days = 5;
      let raw = moment(datetime);
      let duration = moment.duration(moment().diff(datetime));
      const _datetime =
        duration.asHours() > 24 * days
          ? raw.format("DD/MM/YYYY HH:mm")
          : raw.fromNow();
      return `Được đăng vào ${_datetime} bởi ${author}.`;
    },
    reading_time: (min: any) => {
      return `${min} phút đọc`;
    },
    views: (views: any) => {
      return `${views} lượt xem`;
    },
    tags: "Tags",
    relate_post: "Những Bài Viết Liên Quan:",
    table_of_contents: "Mục Lục",
  },
  blog: {
    blog: "Blog",
    intro: "Ở đây bạn có thể tìm thấy tất cả các bài viết của mình",
    find_posts: "Tìm kiếm bài viết...",
    not_found_post: "Không có bài viết nào",
  },
  tag: {
    tag: "Tag",
    tags: "Tags",
    intro: "Bạn có thể tìm các bài viết theo các tags dưới đây:",
    not_found_post: "Không có bài viết nào",
    post_by_tag: "Các bài viết của tag:",
  },
  error_page: {
    404: {
      title: "Trang Không Tồn Tại",
      head: "Xin lỗi, mình không thể tìm thấy trang này.",
      desc: "Nhưng đừng lo, bạn có thể tìm thấy nhiều thứ khác trên trang chủ của mình.",
      home_button: "Trang Chủ",
    },
  },
  common: {
    error: "Lỗi",
    is_loading: "Đang tải...",
    process_take_few_second:
      "Quá trình này có thể mất vài giây, vui lòng không đóng trang này.",
  },
};

export default vi;
