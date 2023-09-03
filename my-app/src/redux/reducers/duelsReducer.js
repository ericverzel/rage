const initialState = {
    duels: [],
    // ... any other initial state related to duels
  };
  
  export default function duelsReducer(state = initialState, action) {
    switch (action.type) {
      // Handle different action types here
      default:
        return state;
    }
  }
  