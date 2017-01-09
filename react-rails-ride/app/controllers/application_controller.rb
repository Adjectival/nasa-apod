class ApplicationController < ActionController::Base
# b/c API, don't want exceptions throw
  protect_from_forgery with: :null_session
end