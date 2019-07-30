export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const eachBand = {
        id: Math.random()*10000000000000000,
        name: action.name
      }
      return { ...state, bands: [...state.bands, eachBand] }

    default:
      return state;
  }
};
