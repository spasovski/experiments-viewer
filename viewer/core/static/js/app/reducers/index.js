import { combineReducers } from 'redux';

// Individual reducers
import metricMetadataReducer from './metric-metadata-reducer';
import metricReducer from './metric-reducer';
import datasetReducer from './dataset-reducer';


const reducers = combineReducers({
  metricMetadataState: metricMetadataReducer,
  metricState: metricReducer,
  datasetState: datasetReducer
});

export default reducers;
