Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    get "users/search/:user_ids", to: "users#search"
    resources :beers, only: [:index, :create, :show]
    resources :breweries, only: [:index, :create, :show]
    resources :check_ins, only: [:create, :show]
    get "check_ins/search/:beer_id", to: "check_ins#search"
    resource :session, only: [:create, :destroy, :show]

  end
  root "static_pages#root"
end
