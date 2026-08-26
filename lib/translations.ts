export type Lang = 'es' | 'en'

export const t = {
  // Login
  adminDashboard:       { es: 'Panel de administración', en: 'Admin dashboard' },
  email:                { es: 'Correo electrónico',      en: 'Email' },
  password:             { es: 'Contraseña',              en: 'Password' },
  signingIn:            { es: 'Iniciando sesión…',       en: 'Signing in…' },
  signIn:               { es: 'Iniciar sesión',          en: 'Sign in' },

  // Top bar
  signOut:              { es: 'Cerrar sesión',           en: 'Sign out' },

  // Tabs
  tabBookings:          { es: 'Reservas',                en: 'Bookings' },
  tabBlockSlots:        { es: 'Bloquear horarios',       en: 'Block Slots' },
  tabTours:             { es: 'Tours',                   en: 'Tours' },
  tabVehicles:          { es: 'Vehículos',               en: 'Vehicles' },
  tabSeasons:           { es: 'Temporadas',              en: 'Seasons' },

  // Bookings tab
  bookings:             { es: 'Reservas',                en: 'Bookings' },
  upcoming:             { es: 'Próximas',                en: 'Upcoming' },
  all:                  { es: 'Todas',                   en: 'All' },
  loading:              { es: 'Cargando…',               en: 'Loading…' },
  noBookings:           { es: 'No se encontraron reservas.', en: 'No bookings found.' },
  date:                 { es: 'Fecha',                   en: 'Date' },
  time:                 { es: 'Hora',                    en: 'Time' },
  tour:                 { es: 'Tour',                    en: 'Tour' },
  guest:                { es: 'Huésped',                 en: 'Guest' },
  people:               { es: 'Personas',                en: 'People' },
  total:                { es: 'Total',                   en: 'Total' },
  status:               { es: 'Estado',                  en: 'Status' },
  cancelled:            { es: 'Cancelada',               en: 'Cancelled' },
  paid:                 { es: 'Pagada',                  en: 'Paid' },
  pending:              { es: 'Pendiente',               en: 'Pending' },
  cancel:               { es: 'Cancelar',                en: 'Cancel' },
  confirmCancel:        { es: '¿Cancelar esta reserva?', en: 'Cancel this booking?' },

  // Blocked slots tab
  blockSlots:           { es: 'Bloquear horarios',       en: 'Block Slots' },
  blockSlotsDesc:       { es: 'Bloquea un horario específico en una fecha — aparecerá como no disponible en el widget de reservas para todos los tours.', en: 'Block a specific time slot on a date — it will show as unavailable in the booking widget for all tours.' },
  dateLabel:            { es: 'Fecha',                   en: 'Date' },
  timeSlot:             { es: 'Horario',                 en: 'Time slot' },
  reason:               { es: 'Motivo (opcional)',        en: 'Reason (optional)' },
  reasonPlaceholder:    { es: 'p. ej. Evento privado',   en: 'e.g. Private event' },
  block:                { es: 'Bloquear',                en: 'Block' },
  unblock:              { es: 'Desbloquear',             en: 'Unblock' },
  noBlockedSlots:       { es: 'No hay horarios bloqueados.', en: 'No blocked slots.' },
  dateSlotRequired:     { es: 'Fecha y horario requeridos.', en: 'Date and slot required.' },

  // Tours tab
  tours:                { es: 'Tours',                   en: 'Tours' },
  edit:                 { es: 'Editar',                  en: 'Edit' },
  save:                 { es: 'Guardar',                 en: 'Save' },
  saving:               { es: 'Guardando…',              en: 'Saving…' },
  cancel2:              { es: 'Cancelar',                en: 'Cancel' },
  name:                 { es: 'Nombre',                  en: 'Name' },
  description:          { es: 'Descripción',             en: 'Description' },
  durationHours:        { es: 'Duración (horas)',        en: 'Duration (hours)' },
  active:               { es: 'Activo',                  en: 'Active' },
  inactive:             { es: 'Inactivo',                en: 'Inactive' },
  activate:             { es: 'Activar',                 en: 'Activate' },
  deactivate:           { es: 'Desactivar',              en: 'Deactivate' },

  // Vehicles tab
  vehicleRates:         { es: 'Tarifas de vehículos',   en: 'Vehicle Rates' },
  seats:                { es: 'Plazas',                  en: 'Seats' },
  editRates:            { es: 'Editar tarifas',          en: 'Edit rates' },
  saveRates:            { es: 'Guardar tarifas',         en: 'Save rates' },
  highSeason:           { es: 'Temporada alta',          en: 'High season' },
  lowSeason:            { es: 'Temporada baja',          en: 'Low season' },
  physicalUnits:        { es: 'Unidades físicas',        en: 'Physical Units' },
  addUnit:              { es: 'Agregar unidad nueva al parque vehicular', en: 'Add a new vehicle unit to the fleet' },
  unitName:             { es: 'Nombre de unidad',        en: 'Unit name' },
  unitNamePlaceholder:  { es: 'p. ej. Yamaha #3',        en: 'e.g. Yamaha #3' },
  model:                { es: 'Modelo',                  en: 'Model' },
  add:                  { es: 'Agregar',                 en: 'Add' },
  unit:                 { es: 'Unidad',                  en: 'Unit' },
  available:            { es: 'Disponible',              en: 'Available' },
  unavailable:          { es: 'No disponible',           en: 'Unavailable' },
  markUnavailable:      { es: 'Marcar no disponible',    en: 'Mark unavailable' },
  markAvailable:        { es: 'Marcar disponible',       en: 'Mark available' },

  // Seasons tab
  seasons:              { es: 'Temporadas',              en: 'Seasons' },
  seasonsDesc:          { es: 'Define rangos de fechas para temporada alta y baja. El widget de reservas usará automáticamente las tarifas correctas según la fecha. Las fechas sin temporada definida usan tarifas de temporada baja.', en: 'Define date ranges for high and low season. Pricing in the booking widget will automatically use the correct rates for the booking date. Dates not covered by any season use low season rates.' },
  seasonName:           { es: 'Nombre de temporada',    en: 'Season name' },
  seasonNamePlaceholder:{ es: 'p. ej. Semana Santa 2026', en: 'e.g. Easter 2026' },
  type:                 { es: 'Tipo',                   en: 'Type' },
  highSeasonOption:     { es: 'Temporada alta',          en: 'High season' },
  lowSeasonOption:      { es: 'Temporada baja',          en: 'Low season' },
  startDate:            { es: 'Fecha inicio',            en: 'Start date' },
  endDate:              { es: 'Fecha fin',               en: 'End date' },
  noSeasons:            { es: 'No hay temporadas definidas. Las fechas sin temporada usan tarifas de temporada baja.', en: 'No seasons defined. Dates not covered by a season use low season rates.' },
  delete:               { es: 'Eliminar',                en: 'Delete' },
  high:                 { es: 'Alta',                   en: 'High' },
  low:                  { es: 'Baja',                   en: 'Low' },
  allFieldsRequired:    { es: 'Todos los campos son obligatorios.', en: 'All fields required.' },
  endAfterStart:        { es: 'La fecha fin debe ser posterior a la fecha inicio.', en: 'End date must be after start date.' },
  failedSave:           { es: 'Error al guardar.',       en: 'Failed to save.' },
} as const

export function tx(key: keyof typeof t, lang: Lang): string {
  return t[key][lang]
}
