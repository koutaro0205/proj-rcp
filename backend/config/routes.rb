Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users
      resources :account_activations, only: [:edit]
      resources :password_resets, only: [:new, :create, :edit, :update]

      post '/login', to: 'sessions#create'
      delete '/logout', to: 'sessions#destroy'
      get '/logged_in', to: 'sessions#logged_in_user'
    end
  end
end
