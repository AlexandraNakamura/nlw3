//criando o mapa
const map = L.map('mapid').setView([-27.2216317,-49.6449752,16.25], 15); //O 15 é o zoom da camera no mapa 

// criando e adicionando camada de tile(ladrilho)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map); //mapa gratuito é aqui

//criando icone
const icon = L.icon({
    iconURL: "./public/images/mapa-maker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68], 
    popupAnchor: [170, 2]
});

// criando popup sobreposição 
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight:240
}).setContent('Lar das meninas <a href="orphanages.html?id=1" class="choose-orphanage" <img src="./public/images/arrow-white.svg" > </a>')

//criando e adicionando marcação
L
.marker([-27.2216317,-49.6449752,16.25], {icon})
.addTo(map)
.bindPopup(popup);