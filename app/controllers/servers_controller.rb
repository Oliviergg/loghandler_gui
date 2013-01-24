class ServersController < ApplicationController
  def show
    api_respond_with(Server.find(params[:id]))
  end
end