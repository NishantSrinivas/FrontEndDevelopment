function fakeRequest(url) {
    const random = Math.random();
    return new Promise((success, failure) => {
        setTimeout(() => {
            if (random >= 0.5) {
                success(`response data from ${url}`);
            } else {
                failure(`could not connect with ${url}`);
            }
        }, 2000);
    });
}

fakeRequest("google.com")
    .then((data) => {
        console.log(data);
        return fakeRequest("apple.com");
    })
    .then((data) => {
        console.log(data);
        return fakeRequest("facebook.com");
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log("ERROR", err);
    })