const NumGenParam = ({ minVal, maxVal, onMinChange, onMaxChange, handleOutput }) => {
  return (
    <div className="param-container">
      <h3>Please insert numbers into generator:</h3>
      <div className="input-fields">
        <div className="input-wrapper"><p className="input-description">min</p>
          <input type="text" value={minVal} onChange={onMinChange} className="num-inputs min" maxLength="3" />
        </div>
        <div className="input-wrapper"><p className="input-description">max</p>
          <input input type="text" value={maxVal} onChange={onMaxChange} className="num-inputs max" maxLength="3" />
        </div>
      </div>
      <div className="ngp-button" onClick={handleOutput}><p>generate</p></div>
    </div>
  )
}

export default NumGenParam;