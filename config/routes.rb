Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resources :beers, only: [:index, :create, :show]
    resources :breweries, only: [:index, :create, :show]
    resource :session, only: [:create, :destroy, :show]

  end
  root "static_pages#root"
end
