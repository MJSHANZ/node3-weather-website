const request = require('request')

const forecast = (longtitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=2d45a4680875b6da90ec3b15a29d6936&query=' + latitude + ',' + longtitude +'&units=f'

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('unable to connect to weather stack services!', undefined)
        } else if (body.error) {
            callback(body.error.info, undefined)
        } else {
            // callback(undefined, {
            //     weatherDesription: response.body.current.weather_descriptions[0],
            //     currentTemperature: response.body.current.temperature,
            //     feelsLike: response.body.current.feelslike
            // })
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out. And the humidity is ' + body.current.weather_descriptions.humidity)
        }
    })

}

module.exports = forecast