if Rails.env === 'production'
  Rails.application.config.session_store :cookie_store, key: '_auth-app-api', domain: 'production-domain', same_site: :none, secure: true
else
  Rails.application.config.session_store :cookie_store, key: '_auth-app-api', same_site: :none, secure: true
end
