@check_ins.each do |check_in|
    json.set! check_in.id do
      json.partial! 'check_in', check_in: check_in
    end
end