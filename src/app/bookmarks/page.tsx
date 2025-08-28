import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MyBookMarks from "../components/Bookmarks/MyBookMarks";
export default function BookmarksMainPage() {
  return (
    <div className="homeBG lg:mx-20 lg:flex lg:flex-col lg:items-center lg:gap-10">
      <Header />
      <MyBookMarks />
      <Footer />
    </div>
  );
}
