Rails.application.routes.draw do
  resources :states
  resources :activities, only: [:show, :create]
  resources :users, only: [:show, :index, :create]
  resources :trips, only: [:destroy, :update]
  
  get '/me', to: 'users#show'

  get 'get_states', to: 'states#index'

  post '/login', to: 'sessions#login'
  post '/create', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/alltrips', to: 'trips#index'
  post '/newtrip', to: 'trips#create'
  patch '/updatetrip/:id', to: 'trips#update'
  delete '/trips/:id', to: 'trips#destroy'

  get '/trip', to: 'activities#show'
  post '/newactivities', to: 'activities#create'
end
