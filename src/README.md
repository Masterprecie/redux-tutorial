# There are three core concepts in redux #
1. A Store that holds the state of your apllication
2. An Action that describes what happened in the application
3. A reducer which handles the action and decides how to update the state.

# There are three principles of redux #
## First Principle ## 
The global state of your apllication is stored as an object inside a single store.
i.e, maintain our application state in a single object which would be managed by the redux store.

for example;
### cake Shop- ###
lets assume we are tracking the number of cakes on the shelf
{
numberOfCakes:10
}

## Second Principles ##
The only way to change the state is to dispatch an aaction, an object that describes what happened.
i.e, to update the state of your app, you need to let Redux know about that with an action. You are not allowed to directlt update the state object

for example;
### cake Shop ###
scan the QR code and place an order - CAKE_ORDERED
{
type: 'CAKE_ORDERED'
}

## Third Principles ##
To specify how the state tree is updated based on actions, you write pure reducers
i.e, Reducer - (previousState, action) => newState

for example 
### cake shop ###
Reducer is the shop keeper, he hands you the cake and deducts it from the store

## The three principles overview ##
We have a simple Javascript App that is subscribed to the Redux store, the app cannot directly update itself so it needs to dispatch an action, the reducer handles the action and updates the current states which in turn updates the application

Javascript App -----> Actions -----> Reducer -----> Redux Store (State) -----> Javascript App


# ACIONS #
What are Actions?
#### It is the only way your application ca interact with the store ####
#### It carry some information from your app to the redux store ####

#### It is plain JavaScript objects ####

#### Have a 'type' property that describes something that happened in the application ####

#### The 'type' property is typically defined as string constants ####
