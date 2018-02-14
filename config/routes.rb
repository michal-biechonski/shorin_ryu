Rails.application.routes.draw do
  devise_for :users
  resources "users", only: [:index, :show, :destroy]
  resources "events", "items" do
    resources "comments", only: [:create, :update, :destroy]
  end
  get "/comments", to: "comments#index"
  root "application#home"
  get "/home", to: "application#home", as: "home"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  
end
