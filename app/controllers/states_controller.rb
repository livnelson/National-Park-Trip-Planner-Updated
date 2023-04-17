class StatesController < ApplicationController

  def index
    render json: State.all, status: :ok
  end
  
end
