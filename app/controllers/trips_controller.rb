class TripsController < ApplicationController

def index
    render json: Trip.all, status: :ok
end

def create
    trip = Trip.create!(trip_params)
    # if trip.valid?
    #     #session[:user_id] = user.id
        render json: trip, status: :created
    # end
end

def destroy
    trip = Trip.find(params[:id])
    trip.destroy
    head :no_content
end

def update 
    trip = Trip.find(params[:id])
    trip.update!(trip_params)
    render json: trip, status: :accepted
end

private

def trip_params
    params.permit(:id, :fullname, :start_date, :end_date, :user_id, :activities)
end

end

