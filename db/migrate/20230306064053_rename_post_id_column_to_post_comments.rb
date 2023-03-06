class RenamePostIdColumnToPostComments < ActiveRecord::Migration[6.1]
  def change
    rename_column :post_comments, :post_id, :post_image_id
  end
end
