app.controller('activeCtrl', function ($scope, gTransit) {
    $scope.transit = JSON.parse(gTransit);
    $scope.transit.description = "Next train to Penn Station";
    $scope.transit.duration = $scope.transit.routes[0].legs[0].duration.text;
    $scope.transit.departureTime= $scope.transit.routes[0].legs[0].steps[1].transit_details.departure_time.text;
    $scope.transit.arrivalTime = $scope.transit.routes[0].legs[0].steps[1].transit_details.arrival_time.text;

});

/*

 {
 "geocoded_waypoints" : [
 {
 "geocoder_status" : "OK",
 "place_id" : "ChIJ8UN9JOBhwokRRDje2BGIGsk",
 "types" : [ "postal_code" ]
 },
 {
 "geocoder_status" : "OK",
 "place_id" : "ChIJwa6oeBZawokRoCSex28Seqc",
 "types" : [ "street_address" ]
 }
 ],
 "routes" : [
 {
 "bounds" : {
 "northeast" : {
 "lat" : 40.7635916,
 "lng" : -73.77053219999999
 },
 "southwest" : {
 "lat" : 40.7047015,
 "lng" : -74.01035299999999
 }
 },
 "copyrights" : "Map data ©2016 Google",
 "legs" : [
 {
 "arrival_time" : {
 "text" : "6:47pm",
 "time_zone" : "America/New_York",
 "value" : 1456616838
 },
 "departure_time" : {
 "text" : "5:49pm",
 "time_zone" : "America/New_York",
 "value" : 1456613393
 },
 "distance" : {
 "text" : "16.7 mi",
 "value" : 26909
 },
 "duration" : {
 "text" : "57 mins",
 "value" : 3445
 },
 "end_address" : "5 Hanover Square, New York, NY 10004, USA",
 "end_location" : {
 "lat" : 40.7047015,
 "lng" : -74.00965339999999
 },
 "start_address" : "Bayside, NY 11361, USA",
 "start_location" : {
 "lat" : 40.7622877,
 "lng" : -73.7743006
 },
 "steps" : [
 {
 "distance" : {
 "text" : "0.3 mi",
 "value" : 469
 },
 "duration" : {
 "text" : "6 mins",
 "value" : 366
 },
 "end_location" : {
 "lat" : 40.76314,
 "lng" : -73.77124999999999
 },
 "html_instructions" : "Walk to Bayside",
 "polyline" : {
 "points" : "ikxwFj`haMZISoBSkB_@_DYkCA_@Fo@UoCy@Z[L]Ly@\\D`ArAG"
 },
 "start_location" : {
 "lat" : 40.7622877,
 "lng" : -73.7743006
 },
 "steps" : [
 {
 "distance" : {
 "text" : "52 ft",
 "value" : 16
 },
 "duration" : {
 "text" : "1 min",
 "value" : 12
 },
 "end_location" : {
 "lat" : 40.7621489,
 "lng" : -73.77425269999999
 },
 "html_instructions" : "Head \u003cb\u003esouth\u003c/b\u003e on \u003cb\u003e210th St\u003c/b\u003e toward \u003cb\u003e42nd Ave\u003c/b\u003e",
 "polyline" : {
 "points" : "ikxwFj`haMZI"
 },
 "start_location" : {
 "lat" : 40.7622877,
 "lng" : -73.7743006
 },
 "travel_mode" : "WALKING"
 },
 {
 "distance" : {
 "text" : "0.2 mi",
 "value" : 322
 },
 "duration" : {
 "text" : "4 mins",
 "value" : 237
 },
 "end_location" : {
 "lat" : 40.7627217,
 "lng" : -73.77053219999999
 },
 "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003e42nd Ave\u003c/b\u003e",
 "maneuver" : "turn-left",
 "polyline" : {
 "points" : "mjxwF``haMSoBSkB_@_DYkCA_@Fo@UoC"
 },
 "start_location" : {
 "lat" : 40.7621489,
 "lng" : -73.77425269999999
 },
 "travel_mode" : "WALKING"
 },
 {
 "distance" : {
 "text" : "338 ft",
 "value" : 103
 },
 "duration" : {
 "text" : "2 mins",
 "value" : 91
 },
 "end_location" : {
 "lat" : 40.7635916,
 "lng" : -73.77095869999999
 },
 "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eBell Blvd\u003c/b\u003e",
 "maneuver" : "turn-left",
 "polyline" : {
 "points" : "_nxwFxhgaMy@Z[L]Ly@\\"
 },
 "start_location" : {
 "lat" : 40.7627217,
 "lng" : -73.77053219999999
 },
 "travel_mode" : "WALKING"
 },
 {
 "distance" : {
 "text" : "92 ft",
 "value" : 28
 },
 "duration" : {
 "text" : "1 min",
 "value" : 26
 },
 "end_location" : {
 "lat" : 40.76314,
 "lng" : -73.77124999999999
 },
 "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003e41st Ave\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the left\u003c/div\u003e",
 "maneuver" : "turn-left",
 "polyline" : {
 "points" : "msxwFnkgaMD`ArAG"
 },
 "start_location" : {
 "lat" : 40.7635916,
 "lng" : -73.77095869999999
 },
 "travel_mode" : "WALKING"
 }
 ],
 "travel_mode" : "WALKING"
 },
 {
 "distance" : {
 "text" : "12.6 mi",
 "value" : 20314
 },
 "duration" : {
 "text" : "28 mins",
 "value" : 1680
 },
 "end_location" : {
 "lat" : 40.75058,
 "lng" : -73.99357999999999
 },
 "html_instructions" : "Train towards Penn Station",
 "polyline" : {
 "points" : "spxwFhmgaMC?HfBv@pPRzE?FNpCRjEHrB@HBt@@TB^D~@@NBf@Bd@RlEPvDJfDHhCFtANpDJ~CFhB@Z?@`AnWB~@@BB|@b@bMLzC@V@VDxA@r@@\\?^?v@?n@Ap@Al@C|@GfBGxAIzBInBIpBKbCIlCGtAMhDGbBD??JE~@GzAGzAKjBCn@ATGtAMvCKzBKdCMdDCd@AJ?LCf@GvAEdAE~@EdAGbAKfCCp@IfBEz@MbDEzACp@CfAA~A?T?zA@t@U?@`@BbA@XBp@HhAFr@Hr@Ff@Hh@^tBZfBF^`DtQTlAd@`ChB`JJb@\\hB\\jBr@fE^hCHd@PdAL|@Jr@Ln@Pz@Nj@Nj@Rh@h@zATl@Tj@x@xBt@jBVt@DEfAzC\\~@`@hAXz@Zt@Nb@JTXr@@Bb@`A^t@\\t@d@|@\\r@b@z@Td@d@~@LVN\\Td@Vn@Pd@Xt@Pl@Pf@b@|A@L@D`CnJXhAf@vBt@bDj@|BtBvIV~@vC|KzDjPLh@j@|BHZFTBJNh@DPRz@BJvA`G`BjIH`@\\hBdAfFp@bD^lBfDjPzB`LDTtA|GnAxGtArGXjAn@|CH`@dHz]pAxGdBpI`BzHt@nDvEzUbF`WrAfHHb@P|@DRFZNh@Px@h@pCt@|DH`@F^Dd@Fv@Df@?X@T?p@ApAKzAE`@EVIl@S|@GPUp@Qd@EJSj@[p@s@jAOZOXk@`AOX[b@mA~A[b@mAdBoCxCKJ_AbAGDu@l@eDtD}@`A}AbBgApAuD`EsCzCEBu@|@KLA@GJo@|@QVwCxCsB|Bo@v@o@v@g@n@k@v@OVOTo@fA_@r@g@|@u@`Bi@nAc@dAGPGRUr@_@hAWbAGPEROp@QfA[zBMhAGbAGlACrA?j@@p@DhAHt@PjBRjBPhBHj@Fj@|@~HrA|LXnCH|@Jz@z@vHTzBd@hENxAh@nEd@hEb@`EXlCPt@JdATlBRnBPvAf@pEj@hF^tCf@zCf@pC^jBVdAr@xCr@tCdAdEJb@f@nBl@dCv@tCfAxDn@~B@DdAnDxBtHp@jCxEbU`@fC|@tQmA`TqBvU{ApM}D`^cC~UqJd~@s@vEeFjV}CrMoAlFsAzFcDdNcBpFFD"
 },
 "start_location" : {
 "lat" : 40.76314,
 "lng" : -73.77124999999999
 },
 "transit_details" : {
 "arrival_stop" : {
 "location" : {
 "lat" : 40.75058,
 "lng" : -73.99357999999999
 },
 "name" : "Pennsylvania Station"
 },
 "arrival_time" : {
 "text" : "6:24pm",
 "time_zone" : "America/New_York",
 "value" : 1456615440
 },
 "departure_stop" : {
 "location" : {
 "lat" : 40.76314,
 "lng" : -73.77124999999999
 },
 "name" : "Bayside"
 },
 "departure_time" : {
 "text" : "5:56pm",
 "time_zone" : "America/New_York",
 "value" : 1456613760
 },
 "headsign" : "Penn Station",
 "line" : {
 "agencies" : [
 {
 "name" : "Long Island Rail Road",
 "phone" : "1 (718) 558-7400",
 "url" : "http://web.mta.info/lirr"
 }
 ],
 "color" : "#c60c30",
 "name" : "Port Washington",
 "text_color" : "#ffffff",
 "vehicle" : {
 "icon" : "//maps.gstatic.com/mapfiles/transit/iw2/6/rail.png",
 "name" : "Train",
 "type" : "HEAVY_RAIL"
 }
 },
 "num_stops" : 6
 },
 "travel_mode" : "TRANSIT"
 },
 {
 "distance" : {
 "text" : "0.2 mi",
 "value" : 280
 },
 "duration" : {
 "text" : "5 mins",
 "value" : 280
 },
 "end_location" : {
 "lat" : 40.751056,
 "lng" : -73.9903102
 },
 "html_instructions" : "Walk to 34 Street Penn Station",
 "polyline" : {
 "points" : "cbvwFzzrbM_BmS"
 },
 "start_location" : {
 "lat" : 40.75058,
 "lng" : -73.99357999999999
 },
 "steps" : [
 {
 "distance" : {
 "text" : "0.2 mi",
 "value" : 280
 },
 "duration" : {
 "text" : "5 mins",
 "value" : 280
 },
 "end_location" : {
 "lat" : 40.751056,
 "lng" : -73.9903102
 },
 "polyline" : {
 "points" : "cbvwFzzrbM_BmS"
 },
 "start_location" : {
 "lat" : 40.75058,
 "lng" : -73.99357999999999
 },
 "travel_mode" : "WALKING"
 }
 ],
 "travel_mode" : "WALKING"
 },
 {
 "distance" : {
 "text" : "3.5 mi",
 "value" : 5598
 },
 "duration" : {
 "text" : "11 mins",
 "value" : 660
 },
 "end_location" : {
 "lat" : 40.706821,
 "lng" : -74.0091
 },
 "html_instructions" : "Subway towards Flatbush Av - Brooklyn College",
 "polyline" : {
 "points" : "cevwFlfrbMOd@xCnBvRjMpRjM~QxL|MxIbDvBtExCb@Vj@Zf@Td@T|NbHjR`JvAr@n@VTHVHXFTBl@FhCTv`@tD`UxBvCZF@F@D?FBF@F@D@FBD@FBDBDBDBFBDB|NrKFDbFpDJHJFJDHBJBH?H?HAFCFEFEFIFIDKDMlBsFlAiDJ]N[PWPSROROdAq@TQRShDsDTSJIJEJAJ?JBLBHFHDpCjC`I~HtArAnBdB"
 },
 "start_location" : {
 "lat" : 40.751056,
 "lng" : -73.9903102
 },
 "transit_details" : {
 "arrival_stop" : {
 "location" : {
 "lat" : 40.706821,
 "lng" : -74.0091
 },
 "name" : "Wall St"
 },
 "arrival_time" : {
 "text" : "6:44pm",
 "time_zone" : "America/New_York",
 "value" : 1456616670
 },
 "departure_stop" : {
 "location" : {
 "lat" : 40.751056,
 "lng" : -73.9903102
 },
 "name" : "34 Street Penn Station"
 },
 "departure_time" : {
 "text" : "6:33pm",
 "time_zone" : "America/New_York",
 "value" : 1456616010
 },
 "headsign" : "Flatbush Av - Brooklyn College",
 "line" : {
 "agencies" : [
 {
 "name" : "MTA New York City Transit",
 "phone" : "1 (718) 330-1234",
 "url" : "http://www.mta.info/"
 }
 ],
 "color" : "#ee352e",
 "icon" : "//maps.gstatic.com/mapfiles/transit/iw2/6/us-ny-mta/2.png",
 "name" : "7 Avenue Express",
 "short_name" : "2",
 "url" : "http://web.mta.info/nyct/service/pdf/t2cur.pdf",
 "vehicle" : {
 "icon" : "//maps.gstatic.com/mapfiles/transit/iw2/6/subway.png",
 "name" : "Subway",
 "type" : "SUBWAY"
 }
 },
 "num_stops" : 5
 },
 "travel_mode" : "TRANSIT"
 },
 {
 "distance" : {
 "text" : "0.2 mi",
 "value" : 248
 },
 "duration" : {
 "text" : "3 mins",
 "value" : 166
 },
 "end_location" : {
 "lat" : 40.7047015,
 "lng" : -74.00965339999999
 },
 "html_instructions" : "Walk to 5 Hanover Square, New York, NY 10004, USA",
 "polyline" : {
 "points" : "spmwFz{ubMVV~@z@pBdAf@JPD^HZDLAh@]VSJKJM"
 },
 "start_location" : {
 "lat" : 40.706821,
 "lng" : -74.0091
 },
 "steps" : [
 {
 "distance" : {
 "text" : "0.1 mi",
 "value" : 189
 },
 "duration" : {
 "text" : "2 mins",
 "value" : 126
 },
 "end_location" : {
 "lat" : 40.7051474,
 "lng" : -74.0100295
 },
 "html_instructions" : "Head \u003cb\u003esouthwest\u003c/b\u003e on \u003cb\u003eWilliam St\u003c/b\u003e toward \u003cb\u003eWall St\u003c/b\u003e",
 "polyline" : {
 "points" : "spmwFz{ubMVV~@z@pBdAf@JPD^HZDLA"
 },
 "start_location" : {
 "lat" : 40.706821,
 "lng" : -74.0091
 },
 "travel_mode" : "WALKING"
 },
 {
 "distance" : {
 "text" : "164 ft",
 "value" : 50
 },
 "duration" : {
 "text" : "1 min",
 "value" : 34
 },
 "end_location" : {
 "lat" : 40.7047649,
 "lng" : -74.00972279999999
 },
 "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eWilliam St\u003c/b\u003e",
 "maneuver" : "turn-slight-left",
 "polyline" : {
 "points" : "efmwFtavbMh@]VSJK"
 },
 "start_location" : {
 "lat" : 40.7051474,
 "lng" : -74.0100295
 },
 "travel_mode" : "WALKING"
 },
 {
 "distance" : {
 "text" : "30 ft",
 "value" : 9
 },
 "duration" : {
 "text" : "1 min",
 "value" : 6
 },
 "end_location" : {
 "lat" : 40.7047015,
 "lng" : -74.00965339999999
 },
 "html_instructions" : "Continue onto \u003cb\u003eHanover Square\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the left\u003c/div\u003e",
 "polyline" : {
 "points" : "wcmwFv_vbMJM"
 },
 "start_location" : {
 "lat" : 40.7047649,
 "lng" : -74.00972279999999
 },
 "travel_mode" : "WALKING"
 }
 ],
 "travel_mode" : "WALKING"
 }
 ],
 "via_waypoint" : []
 }
 ],
 "overview_polyline" : {
 "points" : "ikxwFj`haMZISoBs@kGYkCA_@Fo@UoCuAh@wAj@D`ArAGC?HfBjAlWNxCb@~Jz@xQdEbkAHjECfE]zJi@rNU~FGbBD?EjAOvDYfGs@~Pc@jKa@dJ]lJEfD?pB@t@U?DdBVhEPzAh@~CzEjXxDpRpArHh@nDx@fF`@fBb@tAnCnHlA`DDEfAzC~@hCt@pBv@pBfCjF|BtEjAjCnApDd@jBbCtJbDbNlCvKvC|KzDjPx@fDPp@l@bCzAlGjBlJtDbR~J`g@nAxGtArGhAhFfNhr@vCjNzL|m@tB|KVdAz@jE~@~ELdANnCAbCQ|BOdA[nAaAnCoA|B_@t@{@zAiBbCiBhC{CdDgAhAu@l@eDtD{CdD}FrGyC~CaAjAkAbBwCxCsB|B_BnBsAfB_@l@oAzB}A~C}AzDu@|B_@tAUdAm@bEUlCK`D@|AN~B`AlJrDx\\lFjf@|@nIPt@JdAh@|Ex@hHjA~JnAlHv@pDfBnHfD~MpDtM~DdNp@jCxEbU`@fC|@tQmA`TqBvUyGrl@uNduAs@vEeFjVmF`UwF`VcBpFFD_BmSOd@pWzPry@vi@xFpDrAp@ff@nUdA`@p@Pdg@vEhZxCx@RXNnVnQVPTHTBRANINOLUrBaGxAgE`@s@d@c@xAaAh@e@~DgEVOVAXFRLrMjMdExDvArApBdAf@Jp@Nh@B`Aq@VY"
 },
 "summary" : "",
 "warnings" : [
 "Walking directions are in beta.    Use caution – This route may be missing sidewalks or pedestrian paths."
 ],
 "waypoint_order" : []
 }
 ],
 "status" : "OK"
 }




 */