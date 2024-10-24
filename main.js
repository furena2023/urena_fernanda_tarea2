window.onload=init;

function init(){
	const map = new ol.Map({
		view: new ol.View({
			center: ol.proj.transform([-79.81,-0.33], 'EPSG:4326', 'EPSG:3857' ),
			zoom: 11,
			maxZoom: 15,
			minZoom: 7,
		}),
		layers:[
			new ol.layer.Tile({
				source: new ol.source.OSM()
			})
		],
		target:"js-map"
	})
	
	const FlavioAlfaro = new ol.layer.Tile({
		source: new ol.source.TileWMS({
			url:"https://geoserver.idesinde.com:8443/geoserver/ows?",
			params:{
				LAYERS:"urena:flavio_alfaro",
				FORMAT:"image/png",
				TRANSPARENT: true
			}
		})
	
	
	})
	map.addLayer(FlavioAlfaro);
	
	const Vias = new ol.layer.Tile({
		source: new ol.source.TileWMS({
			url:"https://geoserver.idesinde.com:8443/geoserver/ows?",
			params:{
				LAYERS:"urena:Vias",
				FORMAT:"image/png",
				TRANSPARENT: true
			}
		})
	
	
	})
	map.addLayer(Vias);
	
	const Eventos = new ol.layer.Tile({
		source: new ol.source.TileWMS({
			url:"https://geoserver.idesinde.com:8443/geoserver/ows?",
			params:{
				LAYERS:"urena:eventos",
				FORMAT:"image/png",
				TRANSPARENT: true
			}
		})
	
	
	})
	map.addLayer(Eventos);
}