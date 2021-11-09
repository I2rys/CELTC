//Main
function convert(letters){
    letters = letters.toLowerCase()

    var result = "";
    var letters_args = letters.split('')

    for( i in letters_args ){
        if(letters_args[i] === "a"){
            result += "阿";
        }else if (letters_args[i] === "b"){
            result += "白";
        }else if (letters_args[i] === "c"){
            result += "菜";
        }else if (letters_args[i] === "d"){
            result += "大";
        }else if (letters_args[i] === "e"){
            result += "饿";
        }else if (letters_args[i] === "f"){
            result += "爱";
        }else if (letters_args[i] === "g"){
            result += "哥";
        }else if (letters_args[i] === "h"){
            result += "好";
        }else if (letters_args[i] === "i"){
            result += "哈";
        }else if (letters_args[i] === "j"){
            result += "嘿";
        }else if (letters_args[i] === "k"){
            result += "可";
        }else if (letters_args[i] === "l"){
            result += "了";
        }else if (letters_args[i] === "m"){
            result += "咪";
        }else if (letters_args[i] === "n"){
            result += "哪";
        }else if (letters_args[i] === "o"){
            result += "哦";
        }else if (letters_args[i] === "p"){
            result += "喷";
        }else if (letters_args[i] === "q"){
            result += "去";
        }else if (letters_args[i] === "r"){
            result += "如";
        }else if (letters_args[i] === "s"){
            result += "萨";
        }else if (letters_args[i] === "t"){
            result += "塔";
        }else if (letters_args[i] === "u"){
            result += "屋";
        }else if (letters_args[i] === "v"){
            result += "哇";
        }else if (letters_args[i] === "w"){
            result += "哇";
        }else if (letters_args[i] === "x"){
            result += "噜";
        }else if (letters_args[i] === "y"){
            result += "咦";
        }else if (letters_args[i] === "z"){
            result += "嘟"
        }else{
            result += letters_args[i]
        }
    }

    return result
}

//Exporter
module.exports = {
    convert: convert
}
