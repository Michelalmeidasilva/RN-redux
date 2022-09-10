https://medium.com/reactbrasil/iniciando-com-redux-c14ca7b7dcf
https://medium.com/swlh/state-management-in-react-with-redux-tutorial-53fa7dd60d19

# What is Redux?

Redux is a pattern and library for managing and updating application state, using events called "actions". It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.

Redux is more useful when:

You have large amounts of application state that are needed in many places in the app
The app state is updated frequently over time
The logic to update that state may be complex
The app has a medium or large-sized codebase, and might be worked on by many people

https://changelog.com/posts/when-and-when-not-to-reach-for-redux
https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/
https://redux.js.org/faq/general#when-should-i-use-redux
https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367

## The idea

The basic idea behind Redux is: A single centralized place to contain the global state in your application, and specific patterns to follow when updating that state to make the code predictable.

## Terminology

### Actions

An action is a plain JavaScript object that has a type field. You can think of an action as an event that describes something that happened in the application.

The type field should be a string that gives this action a descriptive name, like "todos/todoAdded". We usually write that type string like "domain/eventName", where the first part is the feature or category that this action belongs to, and the second part is the specific thing that happened.

### Reducers

A reducer is a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state: (state, action) => newState. You can think of a reducer as an event listener which handles events based on the received action (event) type.

Reducers must always follow some specific rules:

They should only calculate the new state value based on the state and action arguments
They are not allowed to modify the existing state. Instead, they must make immutable updates, by copying the existing state and making changes to the copied values.
They must not do any asynchronous logic, calculate random values, or cause other "side effects"

The logic inside reducer functions typically follows the same series of steps:

Check to see if the reducer cares about this action
If so, make a copy of the state, update the copy with new values, and return it
Otherwise, return the existing state unchanged

Reducers can use any kind of logic inside to decide what the new state should be: if/else, switch, loops, and so on.

STOP HERE -> https://redux.js.org/tutorials/essentials/part-1-overview-concepts#:~:text=an%20object%20called-,the,-store%20.

### Summary

- Redux is a library for managing global application state
  Redux is typically used with the React-Redux library for integrating Redux and React together
  Redux Toolkit is the recommended way to write Redux logic
  Redux uses a "one-way data flow" app structure
  State describes the condition of the app at a point in time, and UI renders based on that state
  When something happens in the app:
  The UI dispatches an action
  The store runs the reducers, and the state is updated based on what occurred
  The store notifies the UI that the state has changed
  The UI re-renders based on the new state
  Redux uses several types of code
  Actions are plain objects with a type field, and describe "what happened" in the app
  Reducers are functions that calculate a new state value based on previous state + an action
  A Redux store runs the root reducer whenever an action is dispatched
