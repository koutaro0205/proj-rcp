# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# 99.times do |n|
#   User.create!(
#     email: "test#{n + 1}@test.com",
#     name: "testuser#{n + 1}",
#     password: 'password',
#     password_confirmation: 'password',
#     activated: true,
#   )
# end

# User.create!(
#   email: 'admin@example.com',
#   name: 'adminUser',
#   password: 'password',
#   password_confirmation: 'password',
#   activated: true,
#   admin: true,
# )

categories = ['ご飯もの', '麺類', 'パン・ピザ', '卵料理', '野菜・サラダ', 'スープ・汁物', '鍋', 'ドリンク類', '粉物', 'スイーツ', 'お酒のおつまみ', 'その他']

categories.each do |category|
  Category.create!(name: category)
end
