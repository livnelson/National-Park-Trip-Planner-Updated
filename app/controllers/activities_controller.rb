class ActivitiesController < ApplicationController

    def create
        activities = Activity.create!(activities_params)
        render json: activities, status: :created
    end

    private
    
    def activities_params
        params.permit(:nam, :trip_id)
    end

end
