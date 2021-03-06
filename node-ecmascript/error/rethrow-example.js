function checkScore(score) {
    if (score < 0 || score > 100) {
        throw "Invalid Score " + score;
    }
}

function checkPlayer(name, score) {

    try {

        checkScore(score)
    } catch (e) {
        // (1) (vi)
        // Làm gì đó với exception
        // (en)
        // Do something with the Exception
        console.log("Something invalid with player: " + name + " >> " + e);

        // (2) (vi)
        // Sau đó ném tiếp ra bên ngoài.
        // (en)
        // Then re-throw this Exception.
        throw e;
    }

    console.log("OK Player " + name + " has score: " + score );
}



// --------------- TEST --------------

checkPlayer("Tom", 90);

checkPlayer("Jerry", -10);
