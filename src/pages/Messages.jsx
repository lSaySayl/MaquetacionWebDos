import Card from "../components/Card/Card";
import { RiDiscussFill } from "react-icons/ri";
import "../Layout/Layout.css";

const Messages = () => {
  return (
    <section className="container__card">
      <Card
        img="https://img.freepik.com/free-psd/3d-illustration-person-with-pink-hair_23-2149436186.jpg?w=1380&t=st=1681955207~exp=1681955807~hmac=9743a74634b5d90e8017dad9bdadee9492e5cdc6d10bf965acf6581d7d8464f6"
        tittle="Message from Anna"
        icon={<RiDiscussFill />}
        date="Two days ago"
        classP="card-icon-group"
      />

      <Card
        img="https://img.freepik.com/free-psd/3d-illustration-person-with-punk-hair-jacket_23-2149436198.jpg?w=1380&t=st=1681955198~exp=1681955798~hmac=cf029a1f9bbac3a38fb5f9b48239a1791a97bc21e7ed0440367d7d2135f0eeb5"
        tittle="Message from David"
        icon={<RiDiscussFill />}
        date="One day ago"
        classP="card-icon-message"
      />

      <Card
        img="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=1380&t=st=1681955192~exp=1681955792~hmac=86ab03efc51c20ef9981f817e0d3cdd5c739a919ffcb7f2589d534bc31faa104"
        tittle="Message from Johann"
        icon={<RiDiscussFill />}
        date="Today"
        classP="card-icon-home"
      />

      <Card
        img="https://img.freepik.com/free-vector/3d-cartoon-young-woman-sitting-using-laptop-character-illustration-vector-design_40876-3101.jpg?w=740&t=st=1682374546~exp=1682375146~hmac=d63149ce0316a5cca6a6ed093b100024b6cad01cf10647c91fb76ea0c3f2ac98"
        tittle="Message from Luna"
        icon={<RiDiscussFill />}
        date="Today"
        classP="card-icon-group"
      />
    </section>
  );
};

export default Messages;
