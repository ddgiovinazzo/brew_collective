require 'test_helper'

class ApiControllerTest < ActionDispatch::IntegrationTest
  test "should get breweries" do
    get api_breweries_url
    assert_response :success
  end

end
