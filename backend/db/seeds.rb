# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# User.create!(
#   email: 'admin@example.com',
#   name: 'adminUser',
#   password: 'password',
#   password_confirmation: 'password',
#   activated: true,
# )

# 99.times do |n|
#   User.create!(
#     email: "test#{n + 1}@test.com",
#     name: "testuser#{n + 1}",
#     password: 'password',
#     password_confirmation: 'password',
#     activated: true,
#   )
# end

User.create!(
  email: 'admin2@example.com',
  name: 'adminUser2',
  password: 'password',
  password_confirmation: 'password',
  activated: true,
  admin: true,
)
