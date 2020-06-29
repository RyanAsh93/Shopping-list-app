class Api::ItemsController < ApplicationController

  def index
    render json: Item.order(created_at: :desc)
  end

  def create
    item = Item.create(name: params[:name])
    render json: item
  end

  def update
    item = Item.find(params[:id])
    item.update(complete: !item.complete)
    render json: item
  end

  def destroy 
    Item.find(params[:id]).destroy
  end

end
