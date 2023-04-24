
import "./Card.css";

// eslint-disable-next-line react/prop-types
const Card = ({ img, tittle, icon, date, classP }) => {
  return (
    <section>
      <section className="card-container animate__animated animate__fadeInRight">
        <img src={img} alt=""></img>
        <section className="card-middle">
          <section>
            <h2>{tittle}</h2>
          </section>
          <section className={classP}>
            <span>{icon}</span>
          </section>
        </section>

        <section>
          <p>{date}</p>
        </section>
      </section>
    </section>
  );
};



export default Card;


