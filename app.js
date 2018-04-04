var i=-1;
var p = [];
var v1,v2,v3,v4;

function Player(name, country , skill , age)
{
    this.name = name;
    this.country = country;
    this. skill = skill;
    this.age = age;
}

function func1()
{
    // var p = [];
    v1 = document.getElementById("name").value;
    v2 = document.getElementById("country").value;
    v3 = document.getElementById("age").value;

    var sel = document.getElementById("skill");
    var txtid = sel.options[sel.selectedIndex].id;
    
    switch(txtid)
    {
        case "op1": v4="Batsman"; break;
        case "op2": v4="Bowler"; break;
        case "op3": v4="All Rounder"; break;
    }

    p.push(new Player(v1,v2,v4,v3));

    document.getElementById("name").value = "";
    document.getElementById("country").value = "";
    document.getElementById("age").value = "";

    // p.push()
}

function func2()
{
    document.getElementById("prev").disabled = false;

    if(i === p.length - 1)
        document.getElementById("next").disabled=true;
    else{
        i = i + 1;
        document.getElementById("name1").innerHTML = p[i].name;
        document.getElementById("country1").innerHTML = p[i].country;
        document.getElementById("age1").innerHTML = p[i].age;
        document.getElementById("skill1").innerHTML = p[i].skill;
    }

}

function func3()
{
if ( i>= p.length)
    document.getElementById("next").disabled = true;
else{
    i = i-1;
    document.getElementById("name1").innerHTML = p[i].name;
    document.getElementById("country1").innerHTML = p[i].country;
    document.getElementById("age1").innerHTML = p[i].age;
    document.getElementById("skill1").innerHTML = p[i].skill;
    document.getElementById("next").disabled=false;
}

}

function ff()
{
    document.getElementById("h1").innerHTML += " - Saylani Premier League";
    document.getElementById("h1").style.textAlign ="center";
    document.getElementById("h1").style.backgroundColor ="blue";
    document.getElementById("h1").style.color = "white";
    document.getElementById("h1").style.fontWeight="bolder";
}

function fff()
{
    document.getElementById("h1").innerHTML = "S P L";
    document.getElementById("h1").style.textAlign ="center";
    document.getElementById("h1").style.backgroundColor ="blue";
    document.getElementById("h1").style.color = "white";
    document.getElementById("h1").style.fontWeight="bolder";
}