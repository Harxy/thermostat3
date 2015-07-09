require 'sinatra/base'

class ThermostatWeb < Sinatra::Base

  set :public, 'public'
  set :views, proc {File.join(root,'.', 'views')}

  get '/' do
    erb :Thermostat
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
