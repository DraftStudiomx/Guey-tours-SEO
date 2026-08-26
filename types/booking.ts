export type Slot = string // e.g. '09:00', '10:00', '12:00' etc.
export type Lang = 'en' | 'es'
export type ReferralSource =
  | 'google'
  | 'facebook'
  | 'instagram'
  | 'tiktok'
  | 'friend'
  | 'hotel'
  | 'travel_site'
  | 'walking_by'
  | 'other'

export interface Tour {
  id: string
  name: string
  description: string | null
  length_hours: number
  active: boolean
}

// The type/model of vehicle (Yamaha ATV, RZR, Defender)
export interface VehicleModel {
  id: string
  name: string
  description: string | null
  capacity: number
  rate_1hr: number
  rate_2hr: number
  rate_3hr: number
  video_url: string | null
}

// An individual physical unit (Yamaha #1, Yamaha #2, etc.)
export interface VehicleUnit {
  id: string
  model_id: string
  name: string
  available: boolean
  next_service_date: string | null
  notes: string | null
  vehicle_models?: VehicleModel
}

export interface BookingPayload {
  tour_id: string
  date: string
  slot: Slot
  num_people: number
  vehicles: { model_id: string; quantity: number }[]
  principal_name: string
  email: string
  phone: string
  total_price: number
  lang: Lang

  // Optional details
  accommodation?: string
  referral_source?: ReferralSource | ''
}

export interface BookingVehicleRow {
  id: string
  booking_id: string
  model_id: string
  quantity: number
  assigned_vehicle_id: string | null
  vehicle_models?: VehicleModel
  vehicles?: VehicleUnit
}
