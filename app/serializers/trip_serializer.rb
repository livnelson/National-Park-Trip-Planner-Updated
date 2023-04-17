class TripSerializer < ActiveModel::Serializer
  attributes :id, :fullname, :start_date, :end_date, :user_id, :activities
  #belongs_to :user
end
