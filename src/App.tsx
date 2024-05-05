import Header from "./components/header";
import Showcase from "./components/showcase";
import AfterShowcase from "./components/afterShowcase"
import ForWhom from "./components/forwhom";
import Earnings from "../src/components/Earnings";
import Grant from "../src/components/Grant"
import Chances from "./components/chances";
import Questions  from "./components/questions";
import Register from "./components/Register";
import Footer from "./components/footer"

const App = () => {
  return (
    <div>
      <Header />
      <Showcase />
      <AfterShowcase />
      <ForWhom />
      <Earnings />
      <Grant />
      <Chances />
      <Questions />
      <Register />
      <Footer />
    </div>
  );
};

export default App;