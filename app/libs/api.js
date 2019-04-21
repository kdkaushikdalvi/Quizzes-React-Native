const getRequestData = (data) => {
    let dataStr = "";
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            dataStr += (dataStr == "") ? key + "=" + data[key] : "&" + key + "=" + data[key];
        }
    }
    return dataStr;
}

export const buildHeader = (headerParams = {}) => {
    var header = {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cache-Control': 'no-cache'
    }
    Object.assign(header, headerParams);
    return header;
}

async function request(onResponse, data, type, featureURL, secureRequest = buildHeader()) {

    let response = '';
    console.log('API URL', featureURL);
    console.log('Sending Data:', data);
    console.log('Sending Header:', secureRequest);
    try {
        if (type === 'GET') {
            //TODO PARAMETER CHECK
            response = await fetch(featureURL, {
                method: type,
                headers: secureRequest
            });
        }
        else {
            response = await fetch(featureURL, {
                method: type,
                headers: secureRequest,
                body: getRequestData(data)
            });
        }
        let responseJSON = await response.json();
        console.log('Response', responseJSON);
        if (responseJSON.responseCode == "00" || responseJSON.responseCode == 0) {
            onResponse.success(responseJSON);
        } else {
            onResponse.error(responseJSON.description);
        }
        if (onResponse.complete) {
            onResponse.complete();
        }
    } catch (error) {
        console.log('Error catch', error);
        error = "Service is currently not available, please try again later";
        onResponse.error(error);
        if (onResponse.complete) {
            onResponse.complete();
        }
    }
}