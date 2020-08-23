# frozen_string_literal: true

class Songlist < ApplicationRecord
  belongs_to :room, optional: true
end
