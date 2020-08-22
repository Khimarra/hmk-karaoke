# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

Room.create!({
              title: 'HMK Room',
              code: '4D2T',
              url: 'somezoomlink'
            })

5.times do
  song = Songlist.create!({
                    name: Faker::Name.first_name,
                    song: Faker::Lorem.sentence(word_count: 4),
                    url: Faker::Internet.url
                  })
end
