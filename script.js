let word1 = prompt("Бірінші сан енгізініз:")

let word2 = prompt("Екінші сан енгізініз:")


function compareWords(word1, word2) {

    if (word1 .toLowerCase() == word2 .toLowerCase()) {
        return 'Сөздер бірдей';
    } else if(word1 .toLowerCase() != word2 .toLowerCase()){
        return 'Сөздер әртүрлі';
    }else{
        
    }
}

alert(compareWords("Javascript","javascript"))