# config/initializers/active_storage.rb
Rails.application.config.active_storage.content_types_to_serve_as_binary += ["image/svg+xml"]
Rails.application.config.active_storage.content_types_allowed_inline += ["image/svg+xml"]
Rails.application.config.active_storage.content_types_accepted = [
  "image/png",
  "image/gif",
  "image/jpeg",
  "image/webp",
  "video/mp4",
  "video/mpeg",
  "video/quicktime",
  "application/pdf"
]

Rails.application.config.active_storage.variant_processor = :vips

Rails.application.config.active_storage.service_configurations = {
  local: {
    service: "Disk",
    root: Rails.root.join("storage"),
    max_size: 100.megabytes # 例として100MBに設定
  }
}
Rails.application.config.active_storage.service = :local
