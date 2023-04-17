class CreateTrips < ActiveRecord::Migration[7.0]
  def change
    create_table :trips do |t|
      t.string :fullname
      t.string :start_date
      t.string :end_date
      t.string :activities
      t.belongs_to :user
      t.timestamps
    end
  end
end