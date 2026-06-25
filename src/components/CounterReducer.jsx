import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,

        count: state.count + state.step,

        history: [...state.history, `Incremented by ${state.step}`],
      };

    case "DECREMENT":
      return {
        ...state,
        count: state.count - state.step,
        history: [...state.history, `Decremented by ${state.step}`],
      };

    case "SET_STEP":
      return {
        ...state,
        step: action.payload,
      };

    case "CLEAR_HISTORY":
      return {
        ...state,
        history: [],
      };

    case "RESET":
      return { count: 0, history: [], step: state.step };

    default:
      return state;
  }
}

const initialState = {
  count: 0,
  step: 1,
  history: [],
};

function CounterReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Count: {state.count}</h2>

      <div>
        <label htmlFor="stepInput">Step: </label>
        <input
          id="stepInput"
          type="number"
          min="1"
          value={state.step}
          onChange={(e) =>
            dispatch({
              type: "SET_STEP",
              payload: Number(e.target.value) > 0 ? Number(e.target.value) : 1,
            })
          }
        />
      </div>

      <div>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        <button onClick={() => dispatch({ type: "CLEAR_HISTORY" })}>
          Clear History
        </button>
      </div>

      <h3>History</h3>
      {state.history.length === 0 ? (
        <p>No actions yet.</p>
      ) : (
        <ul>
          {state.history.map((entry, index) => (
            <li key={`${entry}-${index}`}>{entry}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CounterReducer;
