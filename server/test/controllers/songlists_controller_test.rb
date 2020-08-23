require 'test_helper'

class SonglistsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @songlist = songlists(:one)
  end

  test "should get index" do
    get songlists_url, as: :json
    assert_response :success
  end

  test "should create songlist" do
    assert_difference('Songlist.count') do
      post songlists_url, params: { songlist: { name: @songlist.name, song: @songlist.song, url: @songlist.url } }, as: :json
    end

    assert_response 201
  end

  test "should show songlist" do
    get songlist_url(@songlist), as: :json
    assert_response :success
  end

  test "should update songlist" do
    patch songlist_url(@songlist), params: { songlist: { name: @songlist.name, song: @songlist.song, url: @songlist.url } }, as: :json
    assert_response 200
  end

  test "should destroy songlist" do
    assert_difference('Songlist.count', -1) do
      delete songlist_url(@songlist), as: :json
    end

    assert_response 204
  end
end
