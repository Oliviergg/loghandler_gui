class ApplicationController < ActionController::Base
  protect_from_forgery
  
  
  # Override of respond_with helper to do some test.
  def api_respond_with(resource)
    return if request.format != "application/json"
    
    if request.method == "GET"
      if resource.nil?
        render :json => resource, :status => 404
      else
        render :json => resource, :status => :ok
      end
    elsif request.method == "POST"
      if !resource.valid?
        render :json => {status:"error",messages:resource.errors}, :status => :unprocessable_entity
      else
        render :json => resource, :status => :created
      end  
    elsif request.method == "PUT"
      if resource.nil?
        render :json => "", :status => 204
      elsif !resource.valid?
        render :json => {status:"error",messages:resource.errors}, :status => :unprocessable_entity
      else
        render :json => resource, :status => :ok
      end  
    elsif request.method == "DELETE"
      if resource.nil?
       render :json => "", :status => 204
      elsif !resource.valid?
        render :json => {status:"error",messages:resource.errors}, :status => :unprocessable_entity
      else
        render :json => resource, :status => :ok
      end  
    end
  end

end
