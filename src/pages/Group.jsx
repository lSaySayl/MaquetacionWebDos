import Card from "../components/Card/Card";
import { RiStarSmileLine } from "react-icons/ri";
import "../Layout/Layout.css";
import three from "../../src/assets/three.png";
import four from "../../src/assets/four.png";
import five from "../../src/assets/five.png";
import six from "../../src/assets/six.png";

const Group = () => {
  return (
    <section className="container__card">
      <Card
        img={three}
        tittle="Sebastian's Group"
        icon={<RiStarSmileLine />}
        date="Today"
        classP="card-icon-message"
      />

      <Card
        img={four}
        tittle="Sergio's group"
        icon={<RiStarSmileLine />}
        date="Today"
        classP="card-icon-home"
      />

      <Card
        img={five}
        tittle="Camilo Group"
        icon={<RiStarSmileLine />}
        date="Today"
        classP="card-icon-group"
      />

      <Card
        img={six}
        tittle="Juan Group"
        icon={<RiStarSmileLine />}
        date="Today"
        classP="card-icon-message"
      />
    </section>
  );
};

export default Group;
