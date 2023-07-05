import Header from "./header";
import Main from "./main";
import Footer from "@/components/layouts/footer";
import { FontAwesomeIcon } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Main />
      <Footer />
    </main>
  );
}

