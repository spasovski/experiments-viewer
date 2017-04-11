import * as types from './action-types';


export function gettingDatasets() {
  return {
    type: types.GETTING_DATASETS
  }
}

export function getDatasetsSuccess(datasets) {
  return {
    type: types.GET_DATASETS_SUCCESS,
    datasets
  }
}

export function getDatasetsFailure(status) {
  return {
    type: types.GET_DATASETS_FAILURE,
    status
  }
}

export function changeDataset(dataset) {
  return {
    type: types.CHANGE_DATASET,
    currentDataset: dataset,
  }
}
