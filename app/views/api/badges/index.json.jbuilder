@badges.each do |badge|
    json.set! badge.id do
      json.partial! 'badge', badge: badge
    end
end