import NumGen from "./NumGen";

const NumContainer = ({ output }) => {
  return (
    <div className="num-con-field" >
      <div className="num-con-housing" >
        <NumGen output={output} />
      </div>
    </div>
  )
};

export default NumContainer;
