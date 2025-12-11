var wms_layers = [];


        var lyr_gmap_0 = new ol.layer.Tile({
            'title': 'gmap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PersilUnduh_1 = new ol.format.GeoJSON();
var features_PersilUnduh_1 = format_PersilUnduh_1.readFeatures(json_PersilUnduh_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PersilUnduh_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PersilUnduh_1.addFeatures(features_PersilUnduh_1);
var lyr_PersilUnduh_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PersilUnduh_1, 
                style: style_PersilUnduh_1,
                popuplayertitle: 'PersilUnduh',
                interactive: true,
                title: '<img src="styles/legend/PersilUnduh_1.png" /> PersilUnduh'
            });
var format_PetaPolaRuangRTRWTALAUD20112031_2 = new ol.format.GeoJSON();
var features_PetaPolaRuangRTRWTALAUD20112031_2 = format_PetaPolaRuangRTRWTALAUD20112031_2.readFeatures(json_PetaPolaRuangRTRWTALAUD20112031_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PetaPolaRuangRTRWTALAUD20112031_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PetaPolaRuangRTRWTALAUD20112031_2.addFeatures(features_PetaPolaRuangRTRWTALAUD20112031_2);
var lyr_PetaPolaRuangRTRWTALAUD20112031_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PetaPolaRuangRTRWTALAUD20112031_2, 
                style: style_PetaPolaRuangRTRWTALAUD20112031_2,
                popuplayertitle: 'Peta Pola Ruang [RTRW TALAUD 2011-2031]',
                interactive: true,
    title: 'Peta Pola Ruang [RTRW TALAUD 2011-2031]<br />\
    <img src="styles/legend/PetaPolaRuangRTRWTALAUD20112031_2_0.png" /> Badan Air<br />\
    <img src="styles/legend/PetaPolaRuangRTRWTALAUD20112031_2_1.png" /> Hutan Lindung<br />\
    <img src="styles/legend/PetaPolaRuangRTRWTALAUD20112031_2_2.png" /> Hutan Lindung Bakau<br />\
    <img src="styles/legend/PetaPolaRuangRTRWTALAUD20112031_2_3.png" /> Hutan Produksi Terbatas<br />\
    <img src="styles/legend/PetaPolaRuangRTRWTALAUD20112031_2_4.png" /> Hutan Suaka Alam<br />\
    <img src="styles/legend/PetaPolaRuangRTRWTALAUD20112031_2_5.png" /> Kawasan Lindung Laut<br />\
    <img src="styles/legend/PetaPolaRuangRTRWTALAUD20112031_2_6.png" /> Kawasan Permukiman<br />\
    <img src="styles/legend/PetaPolaRuangRTRWTALAUD20112031_2_7.png" /> Sempadan Pantai<br />\
    <img src="styles/legend/PetaPolaRuangRTRWTALAUD20112031_2_8.png" /> Sempadan Sungai<br />\
    <img src="styles/legend/PetaPolaRuangRTRWTALAUD20112031_2_9.png" /> Tanaman Tahunan Perkebunan<br />\
    <img src="styles/legend/PetaPolaRuangRTRWTALAUD20112031_2_10.png" /> <br />' });

lyr_gmap_0.setVisible(true);lyr_PersilUnduh_1.setVisible(true);lyr_PetaPolaRuangRTRWTALAUD20112031_2.setVisible(true);
var layersList = [lyr_gmap_0,lyr_PersilUnduh_1,lyr_PetaPolaRuangRTRWTALAUD20112031_2];
lyr_PersilUnduh_1.set('fieldAliases', {});
lyr_PetaPolaRuangRTRWTALAUD20112031_2.set('fieldAliases', {'ID': 'ID', 'FUNGSI_HUT': 'FUNGSI_HUT', 'POLA': 'POLA', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'HECTARES': 'HECTARES', 'TIPE': 'TIPE', 'KODE': 'KODE', });
lyr_PersilUnduh_1.set('fieldImages', {});
lyr_PetaPolaRuangRTRWTALAUD20112031_2.set('fieldImages', {'ID': 'TextEdit', 'FUNGSI_HUT': 'TextEdit', 'POLA': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'HECTARES': 'TextEdit', 'TIPE': 'TextEdit', 'KODE': 'TextEdit', });
lyr_PersilUnduh_1.set('fieldLabels', {});
lyr_PetaPolaRuangRTRWTALAUD20112031_2.set('fieldLabels', {'ID': 'inline label - always visible', 'FUNGSI_HUT': 'inline label - always visible', 'POLA': 'inline label - always visible', 'AREA': 'inline label - always visible', 'PERIMETER': 'inline label - always visible', 'HECTARES': 'hidden field', 'TIPE': 'inline label - always visible', 'KODE': 'no label', });
lyr_PetaPolaRuangRTRWTALAUD20112031_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});