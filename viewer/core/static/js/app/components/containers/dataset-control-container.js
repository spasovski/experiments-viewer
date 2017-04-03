import React from 'react';
import { connect } from 'react-redux';

import DatasetControl from '../views/dataset-control';
import * as datasetApi from '../../api/dataset-api';
import * as datasetActions from '../../actions/dataset-actions';
import store from '../../store';


class DatasetControlContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleExperimentChange = this.handleExperimentChange.bind(this);
  }

  componentDidMount() {
    datasetApi.getDatasets();
  }

  render() {
    return <DatasetControl handleExperimentChange={this.handleExperimentChange} {...this.props} />;
  }

  handleExperimentChange(evt) {
    let currentDataset = {};

    for (let i = 0; i < this.props.datasets.length; i++) {
      if (this.props.datasets[i].id == evt.target.value) {
        currentDataset = this.props.datasets[i];
        console.log('changing to dataset:', this.props.datasets[i]);
      }
    }
    store.dispatch(datasetActions.changeDataset(currentDataset));
  }
}

const mapStateToProps = function(store) {
  return {
    datasets: store.datasetState.datasets,
  };
};

export default connect(mapStateToProps)(DatasetControlContainer);
