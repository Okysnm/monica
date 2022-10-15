const lat = '';
const lon = '';

const SERVER_DOMAIN = 'https://api.open-meteo.com/v1';

export const getUbicaciones = async (lat,lon) => {
  try {
    const response = await fetch(`${SERVER_DOMAIN}/forecast?current_weather=true&latitude=${lat}&longitude=${lon}&timezone=America/Argentina/Jujuy`);
    return response.json();
  } catch {
    throw new Error('could not fetch location');
  }
};