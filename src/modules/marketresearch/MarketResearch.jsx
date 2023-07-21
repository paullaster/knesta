/* eslint-disable react/prop-types */
import marketAreas from "./marketAreas";

const MarketResearch = () => {
  return (
    <section
      id="marketresearch"
      style={{ min_height: "100vh" }}
      className="marketresearch"
    >
      <div className="section-heading">
        <h1>Market Research</h1>
      </div>
      <div className="market-research">
        {marketAreas.map((area) => {
          return <Area area={area} key={area.id} />;
        })}
      </div>
    </section>
  );
};

export default MarketResearch;

const Area = ({ area }) => {
  return (
    <div className="specific">
      <div className="text-holder">
        <span>{area.text}</span>
      </div>
      <div id="imageHolder" className="image-holder">
        <img src={area.img} alt={area.text} />
      </div>
    </div>
  );
};

