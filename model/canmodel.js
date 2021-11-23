const db= require('./conn')
var moment = require('moment-timezone')

function convert_data(data,cb){
    var net_St,ns=parseInt((data.NetworkStatus));
    if(ns>=18){
        net_St="Good"
    }
    else if(ns>=15 && ns <18){
        net_St="Moderate"
    }
    
    else if( ns <15 ){
        net_St="Poor"
    }
    else{
        net_St="Wroung input"
    }
    
    console.log(net_St);
    time=moment().tz('Asia/kolkata').format('YYYY-MM-DD HH:mm:ss')
    var dt={'batteryId':data.batteryId,
            'LocationLAT':data.LocationLAT,
            'LocationLONG':data.LocationLONG,
            'NetworkStatus':data.NetworkStatus,
            'socper':data.socper,
            'time':moment().tz('Asia/Kolkata')._d,
            "current":data.current,
            'voltage':data.voltage,
            'Hightemp':data.Hightemp,
            'IotMode':data.IotMode,
            'LoadStatus':data.LoadStatus,
            'Cycles':data.Cycles}
   
    cb(dt)
    console.log(dt);

}



module.exports ={ convert_data}