json.key_format! camelize: :lower

json.extract! friendship, :id, :requestor_id, :receiver_id, :status
