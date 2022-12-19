let center = [52.258455686854404,104.26517187219424];

function init() {
	let map = new ymaps.Map('map-test', {
		center: center,
		zoom: 19
	});

	let placemark = new ymaps.Placemark(center, {}, {
		iconLayout: 'default#image',
		iconImageHref: 'https://cdn.icon-icons.com/icons2/911/PNG/512/pin-mark_icon-icons.com_71387.png',
		iconImageSize: [40, 40],
		iconImageOffset: [-19, -44]
	});

    var myPolygon = new ymaps.Polygon([[

        [52.258872983050985,104.26549567653568],
        [52.25875941499415,104.26556004955205],
        [52.25867629615861,104.26514296605023],
        [52.25858330163232,104.26516576482689],
        [52.25855778982535,104.26504506542122],
        [52.25850676616717,104.26505847646625],
        [52.258485369131684,104.26495252921016],
        [52.25863103336057,104.26487742735775],
        [52.25864502368492,104.26497532798682],
        [52.25875612316205,104.26490424944794],
        [52.258872983050985,104.26549567653568]
    ]],
    {
        hintContent: "Polygon"
    }, {
        fillColor: '#89ac76',

        interactivityModel: 'default#transparent',
        strokeWidth: 8,
        opacity: 0.5
    });
    var polyline = new ymaps.Polyline([
        [52.25820638375773,104.26524757220183],
        [52.25824259434835,104.26543532683284],
        [52.2586014067767,104.2652422077838],
        [52.2585520290927,104.26505713536176],
        [52.258255761828494,104.26521806790265]
    ], {
        hintContent: "PolyLine"
    }, {
        draggable: true,
        strokeColor: '#000000',
        strokeWidth: 4,
        strokeStyle: '1 0'
    });
    map.geoObjects.add(polyline); 
map.setBounds(polyline.geometry.getBounds()); 

    map.controls.remove('geolocationControl'); 
  map.controls.remove('searchControl'); 
  map.controls.remove('trafficControl'); 
  
  map.geoObjects.add(placemark);

  map.geoObjects.add(myPolygon);
  map.setBounds(polygon.geometry.getBounds());
     

}

ymaps.ready(init);