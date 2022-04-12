import "./FilterBar.css";
const FilterBar = (props) => {
  const { label, percenstage } = props;
  console.log(label);
  return (
    <div className="filterBar-container">
      <div className="filterBar-outer">
        <div
          className="filterBar-inner"
          style={{ height: `${percenstage}%` }}
        ></div>
      </div>
      <label>{label}</label>
    </div>
  );
};

export default FilterBar;
