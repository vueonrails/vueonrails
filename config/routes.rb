Rails.application.routes.draw do
  if Rails.env.development?
    get 'vue/(:name)', to: "vue#index"
  end
end
