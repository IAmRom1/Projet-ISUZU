const redIcon = new L.Icon({
    iconUrl: './Assets/icons/Map pointer.svg',
    iconSize: [100, 164],
    iconAnchor: [22, 81],
    popupAnchor: [1, -34],
  });
  
const map = L.map("map").setView([50.8216953, 7.110878], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const marker = L.marker([50.8216953, 7.110878], { icon: redIcon }).addTo(map);
