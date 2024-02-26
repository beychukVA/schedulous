# frozen_string_literal: true

class Filters::Options::NeedsReply < Filters::Options::Base
  def filter
    if @filter_item.value == "true"
      @people.where("users.last_message_sent_at > users.last_message_received_at")
    else
      @people.where("users.last_message_sent_at < users.last_message_received_at")
    end
  end
end
