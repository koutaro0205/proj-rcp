class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: %i[show update destroy following followers following_status]
  before_action :correct_user, only: %i[update]
  def index
    @users = User.where(activated: true).with_attached_image
    render json: @users, methods: [:image_url]
  end

  def show
    render json: @user.as_json(
      include: [
        {
          recipes: { methods: [:image_url] }
        }
      ],
      methods: [:image_url]
    )
  end

  def create
    @user = User.new(user_params)

    attach_image(@user) if params[:image]

    if @user.save
      @user.send_activation_email
      render json: { status: :created, user: @user }
    else
      render json: { status: :unprocessable_entity }
    end
  end

  def update
    attach_image(@user) if params[:image]

    if @user.update(user_params)
      render json: { status: :ok, user: @user }
    else
      render json: { status: :unprocessable_entity }
    end
  end

  def destroy
    @user.destroy
  end

  def following
    pattern = "following"
    # フォローしているユーザー一覧
    following_list = @user.following
    following_count = @user.following.count
    render json: { pattern:, following_count:, following_list: }
  end

  def followers
    pattern = "followers"
    # フォロワー一覧
    followers_list = @user.followers
    followers_count = @user.followers.count
    render json: { pattern:, followers_count:, followers_list: }
  end

  # カレントユーザーが相手のユーザーをフォローしているか
  def following_status
    status = current_user.following?(@user)
    render json: { is_following: status }
  end

  # レシピをお気に入り登録しているか
  def favorite_status
    @recipe = Recipe.find(params[:id])
    render json: { is_favorite: current_user.favorite?(@recipe), favorite_count: @recipe.favorites.count }
  end

  # カレントユーザーのお気に入りレシピ一覧
  def favorite_recipes
    render json: current_user.favorite_recipes.as_json(
      include: [
        {
          user: { methods: [:image_url] }
        },
        :category
      ],
      methods: [:image_url]
    )
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def correct_user
    @checked_user = User.find_by(id: params[:id])
    return if current_user?(@checked_user)

    render json: { status: :forbidden }
  end

  def user_params
    params.permit(
      :name,
      :email,
      :password,
      :password_confirmation,
      :image
    )
  end
end
