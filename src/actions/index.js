import axios from "axios";

export function loadWord() {
    return dispatch => {
        return axios
            .get(
                "https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=354icjirvde9jhy71gv1nf8yyk3qvzzk4mvi1014xixi90ouv"
            )
            .then(response => {
                dispatch(loadWords(response.data));
            });
    };
}

export function loadWords(arr) {
    return {
        type: "LOAD_WORDS",
        arr: arr
    };
}