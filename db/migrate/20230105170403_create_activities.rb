class CreateActivities < ActiveRecord::Migration[7.0]
  def change
    create_table :activities do |t|
      t.string :name
      t.belongs_to :trip
      t.timestamps
    end
  end
end
