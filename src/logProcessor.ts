function process(arr: object[]) {

    let map = new Map();

    arr.forEach((obj: any) => {
        let message: string = obj["message"];
        let notHash: string = obj["facility"]+obj["level"]+obj["timeStamp"];
    
        if (map.has(notHash)) {
            appendMessage(map, notHash, message);
        } else {
            map.set(notHash, obj)
        }

    });

    return mapToObject(map);

}

function appendMessage(map: Map<any, any> ,notHash: string, message: string) {
    let innerObj: any = map.get(notHash);
    innerObj["message"] += "\n" + message;
    map.set(notHash, innerObj);
}

function mapToObject (map: Map<any, any>) {
    let jsonArray: object[] = [];
    map.forEach((value, key) => {
        jsonArray.push(value);
    });
    return jsonArray; 
}

export default process;

