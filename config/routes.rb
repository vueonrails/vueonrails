Rails.application.routes.draw do
  if Rails.env.development?
    get 'vue/(:id)', to: "vue#index"
  end
end
