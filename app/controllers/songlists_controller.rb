class SonglistsController < ApplicationController
  before_action :set_songlist, only: [:show, :update, :destroy]

  # GET /songlists
  def index
    @songlists = Songlist.all

    render json: @songlists
  end

  # GET /songlists/1
  def show
    render json: @songlist
  end

  # POST /songlists
  def create
    @songlist = Songlist.new(songlist_params)

    if @songlist.save
      render json: @songlist, status: :created, location: @songlist
    else
      render json: @songlist.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /songlists/1
  def update
    if @songlist.update(songlist_params)
      render json: @songlist
    else
      render json: @songlist.errors, status: :unprocessable_entity
    end
  end

  # DELETE /songlists/1
  def destroy
    @songlist.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_songlist
      @songlist = Songlist.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def songlist_params
      params.require(:songlist).permit(:name, :song, :url)
    end
end
