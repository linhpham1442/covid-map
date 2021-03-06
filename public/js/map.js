require([
    "esri/Map",
    "esri/views/MapView",
    "esri/Graphic",
    "esri/layers/GraphicsLayer"
], function(Map, MapView, Graphic, GraphicsLayer) {

    var map = new Map({
        basemap: "topo-vector"
    });

    var view = new MapView({
        container: "viewDiv",
        map: map,
        center: [106.8033387, 10.8739831],
        zoom: 16,
        highlightOptions: {
            color: "blue"
        }
    });


    var graphicsLayer = new GraphicsLayer();
    // Create attributes
    var attributes = {
        Name: "My point", // The name of the
        Location: "gần đường Hàn Thuyên", // The owner of the
    };
    // Create popup template
    var popupTemplate = {
        title: "{Name}",
        content: "Điểm này ở <b>{Location}</b>.",

    };


    var point = {
        type: "point",
        longitude: 106.80353181904727,
        latitude: 10.872181405352505
    };
    var simpleMarkerSymbol = {
        type: "simple-marker",
        color: [226, 119, 40], // orange
        outline: {
            color: [255, 255, 255], // white
            width: 1
        }
    };

    var pointGraphic = new Graphic({
        geometry: point,
        symbol: simpleMarkerSymbol,
        attributes: attributes,
        popupTemplate: popupTemplate
    });

    graphicsLayer.add(pointGraphic);
    map.add(graphicsLayer);

    var simpleLineSymbol = {
        type: "simple-line",
        color: [226, 119, 40], // orange
        width: 2
    };

    var polyline = {
        type: "polyline",
        paths: [
            [106.80123584813046, 10.869821274263774],
            [106.80233018940856, 10.871022414740189],
            [106.80084961003229, 10.87110670511837]
        ]
    };

    var polylineGraphic = new Graphic({
        geometry: polyline,
        symbol: simpleLineSymbol,
        attributes: attributes,
        popupTemplate: popupTemplate
    });

    graphicsLayer.add(polylineGraphic);

    //polygon 
    var polygon = {
        type: "polygon",
        rings: [
            //    [106.80374639576847, 10.871064559932258],
            //    [106.80518405980048, 10.870158436990936],
            //    [106.80400388783389, 10.86891514754674],
            //    [106.80320995396546, 10.868325110065758],
            //    [106.80239456242491, 10.86944196574033]

            [106.80079997999783, 10.876445443560435],
            [106.80133735297787, 10.877887879061818],
            [106.80011930528633, 10.878802590163708],
            [106.80176725293352, 10.878802590163708],
            [106.80200011530036, 10.879805252015045],
            [106.80241210417665, 10.878767409526409],
            [106.80398840357746, 10.878767409526409],
            [106.80271661478989, 10.877870288528952],
            [106.80318233952354, 10.876550987889477],
            [106.80203594007837, 10.877289796825284]
        ]
    };

    var simpleFillSymbol = {
        type: "simple-fill",
        color: [227, 139, 79, 0.6], // orange, opacity 60%
        outline: {
            color: [255, 255, 255],
            width: 1
        }
    };

    var polygonGraphic = new Graphic({
        geometry: polygon,
        symbol: simpleFillSymbol,
        attributes: attributes,
        popupTemplate: popupTemplate
    });

    graphicsLayer.add(polygonGraphic);

    var pictureGraphic = new Graphic({
        geometry: {
            type: "point",
            longitude: 106.7986823851482,
            latitude: 10.875826928282969
        },
        symbol: {
            type: "picture-marker",
            url: "https://cdn2.iconfinder.com/data/icons/map-pins-1-01-easylines/128/yumminky-pin-68-512.png", //"https://developers.arcgis.com/labs/images/bluepin.png",
            width: "24px",
            height: "24px"
        }
    });
    graphicsLayer.add(pictureGraphic);

    graphicsLayer.add(pictureGraphic);
    //graphicsLayer.add(pictureGraphic);
    var textGraphic = new Graphic({
        geometry: {
            type: "point",
            longitude: 106.7986823851482,
            latitude: 10.875826928282969
        },
        symbol: {
            type: "text",
            color: [25, 25, 25],
            haloColor: [255, 255, 255],
            haloSize: "1px",
            text: "Đại học KHTN",
            xoffset: 0,
            yoffset: -25,
            font: {
                size: 12
            }
        }
    });
    graphicsLayer.add(textGraphic);
    view.ui.add(graphicsLayer)

});
// //starpolygon
// var starpolygon = {
// 	 type: "polygon",
// 	 rings: [
// 	   [106.80079997999783, 10.876445443560435],
// 	   [106.80133735297787, 10.877887879061818],
// 	   [106.80011930528633, 10.878802590163708],
// 	   [106.80176725293352, 10.878802590163708],
// 	   [106.80200011530036, 10.879805252015045],
// 	   [106.80241210417665, 10.878767409526409],
// 	   [106.80398840357746, 10.878767409526409],
// 	   [106.80271661478989, 10.877870288528952],
// 	   [106.80318233952354, 10.876550987889477],
// 	   [106.80203594007837, 10.877289796825284]
// 	 ]
// 	};

// 	var starFillSymbol = {
// 	 type: "simple-fill",
// 	 color: [247, 244, 8, 0.6],  // yellow, opacity 60%
// 	 outline: {
// 	   color: [255, 255, 255],
// 	   width: 1
// 	 }
// 	};

// 	var starpolygonGraphic = new Graphic({
// 	 geometry: starpolygon,
// 	 symbol: starFillSymbol,
// 	 attributes: attributes,
//      popupTemplate: popupTemplate
// 	});
// 	graphicsLayer.add(starpolygonGraphic);