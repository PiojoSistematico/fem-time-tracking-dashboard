type CardProps = {
  elem: {
    title: string;
    timeframes: {
      daily: {
        current: number;
        previous: number;
      };
      weekly: {
        current: number;
        previous: number;
      };
      monthly: {
        current: number;
        previous: number;
      };
    };
  };
  route: string;
  period: string;
};

const Card: React.FunctionComponent<CardProps> = ({ elem, route, period }) => {
  return (
    <section className="card">
      <img src={"./images/icon-" + route + ".svg"} alt="" />
      <div>
        <h1>{elem.title}</h1>
        <img src={"./images/icon-ellipsis.svg"} alt="" />
        <span>{elem.timeframes[`${period}`].current}</span>
        <span> Last Week {elem.timeframes[`${period}`].previous} hrs</span>
      </div>
    </section>
  );
};

export default Card;
