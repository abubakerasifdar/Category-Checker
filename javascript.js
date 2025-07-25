
        document.addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                myFunction();
                document.getElementById("input").value = "";
            }
        })
        function myFunction() {
            let a = document.getElementById('input').value;
            let result;
            switch (a) {
                case "A": {
                    result = "A for Adventure moveis",
                    document.getElementById("output").style.background = "brown";
                    break;
                }
                case "C": {
                    result = "C for Comedy movies"
                    document.getElementById("output").style.background = "black";
                    break;
                }
                case "F": {
                    result = "F for Familty movies"
                    document.getElementById("output").style.background = "green";
                    break;
                }
                case "H": {
                    result = "H for Horror movies"
                    document.getElementById("output").style.background = "purple";
                    break;
                }
                default:{
                    result = "Please Write a Valid Input"
                    document.getElementById("output").style.background = "red";
                    break;
                }
            }
            document.getElementById("output").style.display = "flex";
            document.getElementById("output").innerHTML = result;
            document.getElementById("input").value = "";
        }
