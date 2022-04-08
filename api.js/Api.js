
document.querySelector("button").onclick=()=>{
    fetch("https://www.foaas.com/operations").then(
        function(res){
            return res.json()
        }
    ).then(
        function(res){
            let tbody = document.querySelector("#users")
            res.forEach(
                function(joker){
                    let tr = document.createElement("tr")
                    let tdJokes=document.createElement("td")
                    tdJokes.append(
                        document.createTextNode(joker.name)
                    )
                    tr.append(tdJokes)
                    tbody.append(tr)
                    

                }
            );
        }
    )
}