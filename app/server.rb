require 'sinatra'

set :public_folder, Proc.new { File.join(root, "..", "public") }
set :views, Proc.new { File.join(root, "views") }

get '/' do
  erb :index
end