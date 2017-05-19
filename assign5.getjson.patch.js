(function($) {
  $.getWeatherJSON = function ( url , callback ){
    $.getJSON (url , function (data){  
      if (data && data.query && data.query.results && data.query.results.channel.item.forecast && data.query.results.channel.item.forecast[3] ){ // if data.query.results exist , do the following action.
        callback (data)
      }else {
        console.info("reloading : ",url) 
        $.getWeatherJSON(url,callback)
      }
    })
  }
})(jQuery)