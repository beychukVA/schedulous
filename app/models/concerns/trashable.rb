# frozen_string_literal: true

module Trashable
  extend ActiveSupport::Concern

  included do
    scope :trashed, -> { where.not(trashed_at: nil) }
    scope :not_trashed, -> { where(trashed_at: nil) }
  end

  def trashed?
    trashed_at.present?
  end

  def trash
    ActiveRecord::Base.transaction do
      before_trashing

      update! trashed_at: Time.current

      after_trashing
    end
  end

  def restore
    ActiveRecord::Base.transaction do
      before_restoring

      update! trashed_at: nil

      after_restoring
    end
  end

  private
    def before_trashing
      # override this in model
    end

    def before_restoring
      # override this in model
    end

    def after_trashing
      # override this in model
    end

    def after_restoring
      # override this in model
    end
end
