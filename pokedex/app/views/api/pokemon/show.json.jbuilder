json.pokemon do 
    json.extract! @pokemon, :name, :attack, :defense, :poke_type, :moves, :id
    json.image_url asset_path(@pokemon.image_url)
    json.item_ids do  
        json.array! @pokemon.items.pluck(:id)
    end 
end

json.items do 
    @pokemon.items.each do |item|
        json.set! item.id do 
            json.extract! item, :id, :name, :pokemon_id, :price, :happiness
            json.image_url asset_path(item.image_url)
        end
    end
end