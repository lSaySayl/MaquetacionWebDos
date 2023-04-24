import Card from "../components/Card/Card";
import { RiDonutChartFill } from "react-icons/ri";
import "../Layout/Layout.css";
import one from "../../src/assets/One.png";
import two from "../../src/assets/two.png";
import three from "../../src/assets/three.png";
import four from "../../src/assets/four.png";



const Home = () => {
  return (
    <section className="container__card">
      <Card
        img={one}
        tittle="Search data"
        icon={<RiDonutChartFill />}
        date="Today"
        classP="card-icon-home"
      />
      <Card
        img={two}
        tittle="Compare data"
        icon={<RiDonutChartFill />}
        date="Today"
        classP="card-icon-message"
      />

      <Card
        img={three}
        tittle="Share data"
        icon={<RiDonutChartFill />}
        date="Today"
        classP="card-icon-group"
      />

      <Card
        img={four}
        tittle="Import data"
        icon={<RiDonutChartFill />}
        date="Today"
        classP="card-icon-home"
      />
   

      
    </section>
  );
};

export default Home;
