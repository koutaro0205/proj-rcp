Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post '/login', to: 'sessions#create'
      delete '/logout', to: 'sessions#destroy'
      get '/logged_in', to: 'sessions#logged_in_user'

      resources :users do
        member do
          get :following, :followers, :following_status, :favorite_status
        end

        collection do
          get :favorite_recipes
        end
      end
      resources :recipes do
        member do
          get :users_favorite
        end
      end
      resources :account_activations, only: [:edit]
      resources :password_resets, only: %i[new create edit update]
      resources :relationships, only: %i[create destroy]
      resources :favorites, only: %i[create destroy]
      resources :categories
    end
  end
end
