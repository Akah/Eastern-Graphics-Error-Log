import process from '../logProcessor';


test('processCombinesDuplicates', () => {

    let input = [{
        "message": "this is a message",
        "facility": "a facility",
        "level": "a level",
        "timestamp": "2019-02-04T20:51:54.685Z"
    },{
        "message": "this is a message which should be appended to the first",
        "facility": "a facility",
        "level": "a level",
        "timestamp": "2019-02-04T20:51:54.685Z"
    }];

    let output = [{
        "message": "this is a message\nthis is a message which should be appended to the first",
        "facility": "a facility",
        "level": "a level",
        "timestamp": "2019-02-04T20:51:54.685Z"
    }]

    expect(process(input)).toStrictEqual(output);
});

test('processCombinesMultipleDuplicates', () => {

    let input = [{
        "message": "this is a message",
        "facility": "a facility",
        "level": "a level",
        "timestamp": "2019-02-04T20:51:54.685Z"
    },{
        "message": "this is a message which should be appended to the first",
        "facility": "a facility",
        "level": "a level",
        "timestamp": "2019-02-04T20:51:54.685Z"
    },{
        "message": "this is a message which should be appended to the rest",
        "facility": "a facility",
        "level": "a level",
        "timestamp": "2019-02-04T20:51:54.685Z"
    }];

    let output = [{
        "message": "this is a message\nthis is a message which should be appended to the first\nthis is a message which should be appended to the rest",
        "facility": "a facility",
        "level": "a level",
        "timestamp": "2019-02-04T20:51:54.685Z"
    }]

    expect(process(input)).toStrictEqual(output);
});

test('processDoesntCombineDifferentValues', () => {

    let input = [{
        "message": "this is a message",
        "facility": "not facility",
        "level": "a level",
        "timestamp": "2019-02-04T20:51:54.685Z"
    },{
        "message": "this is a message which should be appended to the first",
        "facility": "a facility",
        "level": "a level",
        "timestamp": "2019-02-04T20:51:54.685Z"
    }];

    let output = [{
        "message": "this is a message",
        "facility": "not facility",
        "level": "a level",
        "timestamp": "2019-02-04T20:51:54.685Z"
    },{
        "message": "this is a message which should be appended to the first",
        "facility": "a facility",
        "level": "a level",
        "timestamp": "2019-02-04T20:51:54.685Z"
    }];

    expect(process(input)).toStrictEqual(output);
});

test('processAllowsNullValues', () => {
    let input = [{
        "message": "this is a message",
        "facility": "not facility",
        "level": "a level",
        "timestamp": "2019-02-04T20:51:54.685Z"
    },{
        "message": null,
        "facility": null,
        "level": null,
        "timestamp": null,
    }];

    let output = [{
        "message": "this is a message",
        "facility": "not facility",
        "level": "a level",
        "timestamp": "2019-02-04T20:51:54.685Z"
    },{
        "message": null,
        "facility": null,
        "level": null,
        "timestamp": null
    }];

    expect(process(input)).toStrictEqual(output);
})