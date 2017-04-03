import React from 'react';


export default function(props) {
  return (
    <div className="dataset-config-content">
      <select className="dataset-selection" onChange={props.handleExperimentChange}>
        {props.datasets.map(dataset => {
          return (
            <option key={dataset.id} value={dataset.id}>{dataset.name}</option>
          );
        })}
      </select>
      <button className="button btn-small apply-config">apply</button>
    </div>
  );
}

/*
<div className="dataset-cohorts">
  {props.datasets.populations.map(dataset => {
    return (
      <span>{dataset.name}</span>
    );
  })}
</div>
*/
