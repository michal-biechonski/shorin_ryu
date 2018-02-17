class CartItem
  include Mongoid::Document

  belongs_to :cart
  belongs_to :item
  field :quantity, type: Integer, default: 0
end