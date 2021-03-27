
let url="https://www.espncricinfo.com/series/ipl-2020-21-1210595";
let fs = require("fs");
let path = require("path");
let request = require("request");
let cheerio = require("cheerio");

var dirPath = "C:\\Users\\hp\\Desktop\\development\\web-scrapper\\webScrapping_hw\\" + "IPL 2020";
dirCreator(dirPath);

request(url, cb);
function cb(error, response, html) {
    if (error)
        console.log(error);
    else
        extractHtml(html);
}
function extractHtml(html) {
    let selectorTool = cheerio.load(html);
    let teamNamesArr = selectorTool("a.label.blue-text.blue-on-hover");
    for (let i = 1; i <=8; i++) 
    {
        let teamNameLink = selectorTool(teamNamesArr[i]).attr("href");
        fullteamName= teamNameLink.substring(6);
        let teamName = fullteamName.split("-");
        teamName = teamName[0] + " " + teamName[1];
        teamName = teamName.trim();

        var dirPath = "C:\\Users\\hp\\Desktop\\development\\web-scrapper\\webScrapping_hw\\IPL 2020\\" + teamName;
        dirCreator(dirPath);
    }
    getScorecards("https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results");
}

function getScorecards(url)
{
    request(url, cb);
    function cb(err, response, html){
        if(err)
        console.log(err);
        else
        extractScorecards(html);
    }
}
function extractScorecards(html)
{
    let selTool = cheerio.load(html);
    let matchNames=selTool(".col-md-8.col-16");
    let arr=[];
    for (let i = 0; i < matchNames.length; i++) 
    {
        let buttons= selTool(matchNames[i]).find(".btn.btn-sm.btn-outline-dark.match-cta");
        let scorecardLink = selTool(buttons[2]).attr("href");
        let fullLink = "https://www.espncricinfo.com" + scorecardLink;
        arr.push(fullLink);
    }
    getMatchDetails(arr);
}
function getMatchDetails(arr)
{
    for(let i=0; i<arr.length; i++)
    {
        request(arr[i], cb);
        function cb(err, response, html)
        {
            if(err)
            console.log(err);
            else
            extractMatchDetails(html);
        }
    }
}
function extractMatchDetails(html)
{
    let selectorTool= cheerio.load(html);

    let teamNames=selectorTool(".Collapsible h5");
    let batsmentable = selectorTool(".Collapsible__contentInner .table.batsman");
    let venueAndDate = selectorTool(".match-info-MATCH .description");
    let matchResult = selectorTool(".match-info-MATCH .status-text").text();
    
    venueAndDate = venueAndDate.toString().split(",");
    let venue = venueAndDate[1].trim();
    let date = venueAndDate[2].trim();

    for (let i = 0; i < batsmentable.length; i++) 
    {
        let singleInningTeam = selectorTool(teamNames[i]).text();
        singleInningTeam = singleInningTeam.split("INNINGS")[0];
        singleInningTeam = singleInningTeam.trim().toLowerCase().split(" ");
        teamname = singleInningTeam[0] + " " + singleInningTeam[1];
        let singleInningBatsmen = selectorTool(batsmentable[i]).find("tbody tr");
        
        let opponent;
        if(i==0)
        {
             opponent = selectorTool(teamNames[1]).text();
            opponent = opponent.split("INNINGS")[0].trim();
        }
        if(i==1)
        {
             opponent = selectorTool(teamNames[0]).text();
            opponent = opponent.split("INNINGS")[0].trim();
        }

        for (let j = 0; j < singleInningBatsmen.length-1; j=j+2) 
        {
            let singleAllCol = selectorTool(singleInningBatsmen[j]).find("td");
            let playername = selectorTool(singleAllCol[0]).text();
            playername=playername.trim().toLowerCase().split(" ");
            batsmanName = playername[0] + " " + playername[1];

            let arr=[];
            let runs = selectorTool(singleAllCol[2]).text();
            let balls= selectorTool(singleAllCol[3]).text();
            let fours = selectorTool(singleAllCol[5]).text();
            let sixes = selectorTool(singleAllCol[6]).text();
            let SR = selectorTool(singleAllCol[7]).text();
            arr.push({
                runs: runs,
                balls: balls,
                fours: fours,
                sixes: sixes,
                SR: SR,
                venue: venue,
                date: date,
                opponent: opponent,
                result: matchResult
            })
            console.log(arr);
            fileCreator(teamname, batsmanName);
            writeData(teamname, batsmanName, arr);
        }
    }
}
function writeData(teamname, batsmanName, arr)
{
    var dirPath = "C:\\Users\\hp\\Desktop\\development\\web-scrapper\\webScrapping_hw\\IPL 2020\\";
    let pathtoFile = path.join(dirPath, teamname, batsmanName + ".json");
    
    let data = JSON.stringify(arr, null, 2);
    
    fs.appendFile(pathtoFile, data, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
}

function dirCreator(dirPath) 
{
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
    }
}
function fileCreator(teamName, batsmanName ) {
    var dirPath = "C:\\Users\\hp\\Desktop\\development\\web-scrapper\\webScrapping_hw\\IPL 2020\\";
    let pathOfFile = path.join(dirPath, teamName, batsmanName + ".json");
    if (fs.existsSync(pathOfFile) == false) {
        let createStream = fs.createWriteStream(pathOfFile);
        createStream.end();
    }
}
