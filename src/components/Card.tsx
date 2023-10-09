type CardProps = {
  elem: {
    title: string;
    timeframes: {
      [key: string]: {
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
    <section className={`card ${route}`}>
      <img
        src={"./images/icon-" + route + ".svg"}
        alt=""
        className="card-img"
      />
      <div className="card-info">
        <div className="justify-between">
          <h2>{elem.title}</h2>
          <a href="#">
            <img
              src={"./images/icon-ellipsis.svg"}
              alt=""
              className="ellipsis"
            />
          </a>
        </div>
        <div className="justify-between">
          <span className="hours">{elem.timeframes[period].current}hrs</span>
          <span className="last-week">
            Last Week {elem.timeframes[period].previous} hrs
          </span>
        </div>
      </div>
    </section>
  );
};

export default Card;
