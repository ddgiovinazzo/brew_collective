class Friendship < ApplicationRecord
    validates_uniqueness_of :requestor_id, scope: [:receiver_id]
    validates_uniqueness_of :receiver_id, scope: [:requestor_id]
    belongs_to :requestor, class_name: :User
    belongs_to :receiver, class_name: :User
end
