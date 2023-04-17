class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :name, :trip_id
  # belongs_to :trip
end
