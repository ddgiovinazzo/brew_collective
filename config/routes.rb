Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :show, :update]
    resources :beers, only: [:index, :create, :show]
    post "beers/brewery", to: "beers#brewery"
    resources :breweries, only: [:index, :create, :show]
    resources :check_ins, only: [:create, :show, :destroy]
    get "check_ins/search/:user_ids", to: "check_ins#search"
    resources :friendships, only: [:create, :update, :destroy, :show]
    resources :awards, only: [:create, :destroy]
    resources :badges, only: [:index]
    resource :session, only: [:create, :destroy, :show]
  end
  root "static_pages#root"
end
